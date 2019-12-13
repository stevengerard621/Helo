import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            const {username, profile_pic, id} = res.data
            this.props.getUser({username,  profile_pic, id})
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    }

    handleLogin = () => {
        axios.post('./api/login', {email: this.state.username,  password: this.state.password}).then(res => {
            const {username, profile_pic, id} = res.data
            this.props.getUser({username, profile_pic, id})
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }
 

    render(){
        console.log(this.props)
        return(
            <div>
                <br/>
                <input 
                    maxLength='100'
                    placeholder='Enter Username'
                    name='username'
                    onChange={(event) => this.handleInput(event)}/>
                <input
                    type='password' 
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}/>
                    <br/>
                    <br/>
                    <button onClick={this.handleLogin}>LOGIN</button>
                    <button onClick={this.handleRegister}>REGISTER</button>
            </div>
        )
    }
};

// const mapStateToProps = reduxState => {
//     return reduxState
// }

export default connect(null, {getUser})(Auth);