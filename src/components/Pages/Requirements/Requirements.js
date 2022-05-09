import React, { useEffect, useState } from 'react';
import '../../Home/Bikes/Bikes.css'
import Requirement from '../Requirement/Requirement';

const Requirements = () => {
    const [requirements, setRequirements]= useState([]);

    useEffect(()=>{

        fetch('https://nbc-motors.herokuapp.com/inquiry')
        .then(res=>res.json())
        .then(data=>setRequirements(data.data))

    },[])
    return (
        <div>
            <h2 className='text-3xl text-red-600 my-3 head-title'>Customer Requirements</h2>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                requirements.map(requirement=><Requirement key={requirement._id} requirement={requirement}/>)
            }
            </div>
        </div>
    );
};

export default Requirements;