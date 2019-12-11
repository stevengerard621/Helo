const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user({username, hash});
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },

    login: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.check_user(email);
        user = user[0];
        if(!user){
            return res.status(400).send('Email not found')
        }
        const authenticated = bcrypt.compareSync(password, user.user_password);
        if(authenticated){
            delete user.user_password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('incorrect password bro')
        }
    },
 
}