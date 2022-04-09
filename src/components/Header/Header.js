import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import "./Header.css"

const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/register">Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                // here optional chaining prevent null value of user's uid when logout.
                user?.uid 
                ? 
                //dont need to use hook for signOut directly use the function.
                <button onClick={() => signOut(auth)}>SignOut</button>
                :
                <Link to="/login">Login</Link>
            }
            </nav>
        </div>
    );
};

export default Header;