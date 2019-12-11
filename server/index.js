require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session')
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB IS CONNECTED BRO')
})

// app.post('/api/login', ctrl.login);
app.post('/api/auth/register', ctrl.register);
// app.post('/api/logout', ctrl.logout);
// app.get('/api/user', ctrl.getUser);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));