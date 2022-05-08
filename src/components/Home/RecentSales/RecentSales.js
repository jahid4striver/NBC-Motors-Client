import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecentSale from '../RecentSale/RecentSale';
import '../../Home/Bikes/Bikes.css'

const RecentSales = () => {
    const [sales, setSales]= useState([]);

    useEffect(()=>{

        fetch('https://nbc-motors.herokuapp.com/sales')
        .then(res=>res.json())
        .then(data=>setSales(data.data))

    },[])
    return (
        <div>
            <h2 className='text-3xl text-red-600 my-3 head-title'>Our Recent Sales</h2>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                sales.slice(0,3).map(sale=><RecentSale key={sale._id} sale={sale}/>)
            }
            </div>
            <div className='my-6'>
            <Link to='/allsales' className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">All Sales</Link>
            </div>
        </div>
    );
};

export default RecentSales;