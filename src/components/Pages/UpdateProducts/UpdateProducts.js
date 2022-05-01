import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const { id } = useParams();
    const [bike, setBike] = useState([]);

    useEffect(() => {
        fetch(`https://nbc-motors.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data.data))
    }, [])
    return (
        <div className='my-5 w-full'>
            <h2 className='text-2xl text-red-600'>Update The {bike.name}</h2>
            <div className='container my-5'>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <h5 className="mt-4 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{bike.name}</h5>
                    <img className="rounded-t-lg h-100 w-100 mx-auto" src={bike.img} alt="" />

                    <div className="p-2">
                        <h4 className="my-1 text- font-medium tracking-tight text-gray-900 dark:text-white">Color: {bike.color}</h4>
                        <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Price: BDT {bike.price} Tk</h4>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">{bike.description}</p>
                        <div className=''>
                            <p className="font-bold text-gray-700 dark:text-gray-400">Available Quantity: {bike.quantity}</p>
                            <button className="w-full mb-2 mt-2 inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Delevered
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;