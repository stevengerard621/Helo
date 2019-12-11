import React, {Component} from 'react'
import axios from 'axios'


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
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    }

    render(){
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
                    <button>LOGIN</button>
                    <button onClick={this.handleRegister}>REGISTER</button>
            </div>
        )
    }
};

export default Auth;