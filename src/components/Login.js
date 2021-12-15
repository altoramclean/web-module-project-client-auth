import React from 'react';
import axios from 'axios';
import credentials from '../mocks/credentials';
import { useHistory } from 'react-router-dom';


class Login extends React.Component {
    render() {

        const login = e => {
            e.preventDefault();
            const history = useHistory();
            axios.post('http://localhost:9000/api/login', credentials)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    history.push('/FriendsList');
                })
                .catch(err => {
                    console.log(err)
                })
    }

    return (
        <div>
            <div className='login'>
                <h1>LOGIN</h1>
                <form onSubmit={login} className='form'>
                    <label className='formInput'>
                        USERNAME
                        <input className='inputBox' type="text" name="username"/>
                        </label>
                    <label  className='formInput'>
                        PASSWORD
                        <input className='inputBox'  type="password" name="password"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}}

export default Login;
