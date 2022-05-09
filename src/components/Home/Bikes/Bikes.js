import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {

        fetch('https://nbc-motors.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data.data))

    }, [])
    return (
        <div>
            <h2 className='text-3xl text-red-600 my-3 head-title'>Our Bikes</h2>
            <div className='container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    bikes.slice(0, 6).map(bike => <Bike key={bike._id} bike={bike} />)
                }
            </div>
            <div className='my-6 container text-right'>
                <Link to='/manageinventory' className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Manage Inventories</Link>
            </div>

        </div>
    );
};

export default Bikes;