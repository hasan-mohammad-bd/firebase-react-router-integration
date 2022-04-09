import React from 'react';
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true})
        })
    }
    return (
        
        <div>
            <h3>Please Login</h3>
            <div style={{margin:"20px"}}>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;