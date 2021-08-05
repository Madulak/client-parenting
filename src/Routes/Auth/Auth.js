import { useState } from 'react';
import { Button } from '@material-ui/core';
import classes from './Signup.module.css';

import * as authActions from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signupHandler = () => {
        const authData = {
            username: username,
            email: email,
            password: password,
        }
        if (username !== '' && email !== '' && password !== '') {
            dispatch(authActions.signup(authData));
            setUsername('');
            setEmail('');
            setPassword('');
        }
    }

    const loginHandler = () => {
        const authData = {
            email: email,
            password: password,
        }
        if (email !== '' && password !== '') {
            dispatch(authActions.login(authData));
            setEmail('');
            setPassword('');
        }
    }


    return(
        <div className={classes.Signup}>
            <div className={classes.blockA}>
                <h1>Welcome to Parenting Forum</h1>

                <h3>Place where parents come and share ideas on how to raise their children to be better citizens.</h3>
            </div>

            <div className={classes.blockB}>
                <h1>{!isLogin ? 'Sign up' : 'Login'}</h1>
                <form>
                    {!isLogin && 
                    <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' /> 
                    }
                    <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                    <Button onClick={!isLogin ? signupHandler : loginHandler} variant="contained" color="primary">
                        {!isLogin ? 'Sign up' : 'Login'}
                    </Button>
                    <p>I {isLogin && "Don't"} have Account I want to  
                        <span onClick={() => setIsLogin(state => !state)}>{isLogin ? ' Sign up' : ' Login'}</span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Auth;