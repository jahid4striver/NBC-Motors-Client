import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [bikes, setBikes]= useState([]);
    useEffect(()=>{
        fetch('https://nbc-motors.herokuapp.com/bikes')
        .then(res=> res.json())
        .then(data=>setBikes(data.data))
    },[bikes])
    return (
        <div>
            <h1 className='text-2xl my-5 text-red-600'>Total Bikes: {bikes.length}</h1>
            <div className='container my-4 lg:text-right md:text-right'>
            <Link to='/additem' className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Item</Link>
            </div>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                bikes.map(bike=><ManageInventory
                key={bike._id}
                bike={bike}
                />)
            }
            </div>
        </div>
    );
};

export default ManageInventories;