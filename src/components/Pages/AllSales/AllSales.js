import React, { useEffect, useState } from 'react';
import '../../Home/Bikes/Bikes.css'
import AllSale from '../AllSale/AllSale';

const AllSales = () => {
    const [sales, setSales]= useState([]);

    useEffect(()=>{

        fetch('https://nbc-motors.herokuapp.com/sales')
        .then(res=>res.json())
        .then(data=>setSales(data.data))

    },[])
    return (
        <div>
            <h2 className='text-3xl text-red-600 my-3 head-title'>All Recent Sales</h2>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                sales.map(sale=><AllSale key={sale._id} sale={sale}/>)
            }
            </div>
        </div>
    );
};

export default AllSales;