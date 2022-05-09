import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height: '500px'}} className='bg-red-500 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-white'>404 Not Found</h1>
            <h2 className='text-1xl font-bold text-white'>The Page You are Searching For Not Found</h2>
            <Link to='/' className=" my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back To Home</Link>

        </div>
    );
};

export default NotFound;