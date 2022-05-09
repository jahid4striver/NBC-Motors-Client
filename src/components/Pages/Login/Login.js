import React from 'react';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }


    if (user) {
        navigate(from, { replace: true });
    }



    return (
        <div>
            <h1 className='my-6'>Please Login</h1>
            <div className='w-75 max-w-lg mx-auto'>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Email" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Password</label>
                        <input type="password" name='password' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Your Password' required="" />
                    </div>
                    <button type="submit" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
            </div>
            <p className='my-2'>Not Have a Account? <Link className='text-red-700' to='/register'>Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;