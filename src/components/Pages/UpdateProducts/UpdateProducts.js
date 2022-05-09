import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

const UpdateProducts = () => {
    const { id } = useParams();
    const [bike, setBike] = useState([]);
    const [updatedQyt, setUpdatedQyt] = useState([]);


    useEffect(() => {
        fetch(`https://nbc-motors.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data.data))
    }, [id, updatedQyt, bike])

    const handleUpdateQyt = (id) => {

        if (bike.quantity > 0) {
            fetch(`https://nbc-motors.herokuapp.com/bikes/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: parseInt(bike.quantity) - 1
                }),
            })
                .then(res => res.json())
                .then(data => {
                    setUpdatedQyt(data.data)
                    toast('Delevery Successful')
                })
        } else {
            toast('Quantity Not Found')
        };
    }


    const handleAddQyt = async (e) => {
        e.preventDefault();

        const addField = parseInt(e.target.quantity.value);
        console.log(addField, bike.quantity);

        fetch(`https://nbc-motors.herokuapp.com/bikes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                quantity: parseInt(bike.quantity) + addField
            }),
        })
            .then(res => res.json())
            .then(data => {
                setUpdatedQyt(data.data)
                toast('Quantity Added Successful')
            })

        e.target.reset();
    }

    return (
        <div className='my-5 w-full'>
            <h2 className='text-2xl text-red-600'>Update The {bike.name}</h2>
            <div className='container my-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mt-4 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{bike.name}</h5>
                        <img className="rounded-t-lg h-100 w-100 mx-auto" src={bike.img} alt="" />

                        <div className="p-2">
                            <h4 className="my-1 text- font-medium tracking-tight text-gray-900 dark:text-white">Color: {bike.color}</h4>
                            <h4 className="my-1 text- font-medium tracking-tight text-gray-900 dark:text-white">Supplier: {bike.supplier}</h4>
                            <h4 className="my-1 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">Price: BDT {bike.price} Tk</h4>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">{bike.description}</p>
                            <div className=''>
                                <p className="font-bold text-gray-700 dark:text-gray-400">Available Quantity: {bike.quantity}</p>
                                <button onClick={() => handleUpdateQyt(bike._id)} className="w-full mb-2 mt-2 inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Delevered
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleAddQyt}>
                        <div className="mb-6">
                            <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Restock This Bike</label>
                            <input type="number" name='quantity' id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Quantity" required />
                        </div>
                        <button className="inline-flex justify-center items-center py-3 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add Quantity
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className='my-6 container text-center'>
                <Link to='/manageinventory' className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default UpdateProducts;