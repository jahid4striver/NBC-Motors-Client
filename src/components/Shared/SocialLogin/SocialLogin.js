import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn= ()=>{
        signInWithGoogle();
    }
    return (
        <div>
            <p>Or</p>
            <button onClick={handleGoogleSignIn} className='text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'><img className='w-6' src={google} alt="" /> Login With Google</button>
        </div>
    );
};

export default SocialLogin;