import React from 'react';


const AllSale = ({ sale }) => {
    const { name, bikename, img, color,date  } = sale;


    return (
        <div className="max-w-sm bg-white text-left rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg w-100 h-70 mx-auto" src={img} alt="" />
            <div className='ms-3 pb-2'>
            <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Customer Name: {name}</p>
            <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Bike Model: {bikename}</p>

            <div>
                <p className="text-1xl  tracking-tight text-gray-900 dark:text-white">Color: {color}</p>
                <p className="text-1xl tracking-tight text-gray-900 dark:text-white">Sale Date: {date}</p>
            </div>
            </div>
        </div>
    );
};

export default AllSale;