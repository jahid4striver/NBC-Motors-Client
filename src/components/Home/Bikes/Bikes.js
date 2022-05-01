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
            <h2>Bikes</h2>
            <div className='container grid grid-cols-3 gap-4'>
            {
                bikes.map(bike=><Bike key={bike._id} bike={bike}/>)
            }
            </div>
        </div>
    );
};

export default Bikes;