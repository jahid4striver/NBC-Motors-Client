import React from 'react';

const Footer = () => {
    const date= new Date();
    const year= date.getUTCFullYear();
    return (
        <div className='h-20 bg-red-600 shadow-lg flex items-center justify-center'>
            <p className='text-white'><small> &copy; Copyright NBC Motors {year}</small></p>
        </div>
    );
};

export default Footer;