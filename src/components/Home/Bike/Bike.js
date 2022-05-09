import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { _id, name, img, price, description, quantity, color, supplier } = bike;
    const navigate = useNavigate();

    const goToUpdate = (id) => {
        navigate(`/bikes/${id}`)
    }

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <h5 className="mt-4 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <img className="rounded-t-lg h-40 mx-auto" src={img} alt="" />

            <div className="p-2">
                <h4 className="my-1 text- font-medium tracking-tight text-gray-900 dark:text-white">Color: {color}</h4>
                <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Price: BDT {price} Tk</h4>
                <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Supplier: {supplier}</h4>
                <p className=" font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className=''>
                    <p className="font-bold text-gray-700 dark:text-gray-400">Available Quantity: {quantity}</p>
                    <button onClick={() => goToUpdate(_id)} className="w-full mb-2 mt-2 inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update Stock 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bike;