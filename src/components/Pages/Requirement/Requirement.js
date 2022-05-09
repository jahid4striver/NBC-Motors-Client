import React from 'react';


const Requirement = ({ requirement }) => {
    const { name,mobile, bikename,  color, description, date} = requirement;


    return (
        <div className="max-w-sm bg-white text-left rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">

            <div className='ms-3 pb-2'>
            <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Customer Name: {name}</p>
            <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Customer Mobile No: {mobile}</p>
            <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Bike Model: {bikename}</p>

            <div>
                <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Color: {color}</p>
                <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Comments: {description}</p>
                <p className="text-1xl tracking-tight text-gray-900 dark:text-white">Delevery Date: {date}</p>
            </div>
            </div>
        </div>
    );
};

export default Requirement;