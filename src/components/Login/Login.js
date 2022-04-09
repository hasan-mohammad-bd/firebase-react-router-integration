import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        
        <div>
            <h3>Please Login</h3>
            <div style={{margin:"20px"}}>
            <button onClick={signInWithGoogle}>Sign in with google</button>
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