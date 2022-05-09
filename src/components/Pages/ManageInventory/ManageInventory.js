import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = ({ bike }) => {
    const { _id, name, img, price, description, quantity, color, supplier } = bike;
    const navigate = useNavigate();

    const goToUpdate = (id) => {
        navigate(`/bikes/${id}`)
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure Want To Delete')

        if (proceed) {
            const url = `https://nbc-motors.herokuapp.com/bikes/${id}`
            fetch(url, {
                method: 'DELETE'
            });
        }

    }

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <h5 className="mt-4 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <img className="rounded-t-lg h-40 mx-auto" src={img} alt="" />

            <div className="p-2">
                <h4 className="my-1 text- font-medium tracking-tight text-gray-900 dark:text-white">Color: {color}</h4>
                <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Price: BDT {price} Tk</h4>
                <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Supplier: {supplier} Tk</h4>
                <p className=" font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className=''>
                    <p className="font-bold text-gray-700 dark:text-gray-400">Available Quantity: {quantity}</p>
                    <button onClick={() => goToUpdate(_id)} className="w-30 me-2 mb-2 mt-2 inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                        </svg></button>
                    <button onClick={() => handleDelete(_id)} className="w-30 mb-2 mt-2 inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Delete
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg></button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;