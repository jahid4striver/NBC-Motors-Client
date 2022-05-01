import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const {id}= useParams();
    const [bike, setBike]= useState([]);

    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setBike(data))
    },[])
    return (
        <div>
            <h2>Update The Products: {id}</h2>
        </div>
    );
};

export default UpdateProducts;