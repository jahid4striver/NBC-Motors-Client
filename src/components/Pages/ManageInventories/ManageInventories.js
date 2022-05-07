import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [bikes, setBikes]= useState([]);
    useEffect(()=>{
        fetch('https://nbc-motors.herokuapp.com/bikes')
        .then(res=> res.json())
        .then(data=>setBikes(data.data))
    },[])
    return (
        <div>
            <h1>Total Bikes: {bikes.length}</h1>
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