import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AddQuantity = () => {
    const { id } = useParams();
    const [bike, setBike] = useState([]);
    // const [updatedQyt, setUpdatedQyt] = useState([]);

    useEffect(() => {
        fetch(`https://nbc-motors.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data.data))
    }, [id])

    const handleAddQyt = (e) => {
        e.preventDefault();
        // console.log(id);
        const addField = parseInt(e.target.add.value);
        console.log();
        console.log(addField);
        const url = `https://nbc-motors.herokuapp.com/bikes/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify({
                quantity: parseInt(bike.quantity) + addField
            }),
        })
            .then(res => res.json())
            .then(data => {
                setBike(data.data)
                console.log(data.data);
            })

    }

    return (
        <div>
            <form onSubmit={handleAddQyt}>
                <div className="mb-6">
                    <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity Update</label>
                    <input type="number" name='quantity' id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Quantity" required />
                </div>
                <button type="submit" name='add' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Quantity</button>
            </form>
        </div>
    );
};

export default AddQuantity;