import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import '../../Home/Bikes/Bikes.css'
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const navigate= useNavigate();


    const handleUserRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conpassword.value;
        console.log(email, password, conPassword);

        if(password === conPassword){
            createUserWithEmailAndPassword(email, password);
            toast('Registration Successful')
        }
        if(user){
            sendEmailVerification();
        }
        if(loading){
            return <Loading></Loading>
        }

       navigate('/');

        
    }
    return (
        <div>
            <h2 className='text-2xl my-3 text-red-600 head-title'>Please Register</h2>
            <div className='w-75 max-w-lg mx-auto'>
                <form onSubmit={handleUserRegister}>
                    <div className="mb-4">
                        <label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Email" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" name='password'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter Password' required="" />
                    </div>
                    <div className="mb-4">
                        <label for="conpassword" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                        <input type="password" name='conpassword'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter Confirm Password' required="" />
                    </div>
                    <button type="submit" className="my-3 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </form>
            </div>
            <p className='my-2'>Already Have a Account? <Link className='text-red-600' to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;