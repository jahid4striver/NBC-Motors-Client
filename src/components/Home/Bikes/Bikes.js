import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes]= useState([]);

    useEffect(()=>{

        fetch('https://nbc-motors.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setBikes(data.data))

    },[])
    return (
        <div>
            <h2 className='text-3xl text-red-600 my-3'>Bikes</h2>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                bikes.map(bike=><Bike key={bike._id} bike={bike}/>)
            }
            </div>
        </div>
    );
};

export default Bikes;