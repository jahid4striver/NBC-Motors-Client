import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn= ()=>{
        signInWithGoogle();
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <p>Or</p>
            <button className='my-3' onClick={handleGoogleSignIn}><img className='h-12' src={google} alt="" /></button>
        </div>
    );
};

export default SocialLogin;