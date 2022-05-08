import React from 'react';
import { toast } from 'react-toastify';

const AddSales = () => {

const handleAddSales= (e)=>{
    e.preventDefault();
const name= e.target.name.value;
const bikename= e.target.bikename.value;
const color= e.target.color.value;
const img= e.target.img.value;
const date= e.target.date.value;

const newBike={name, bikename, color, img, date};


fetch('https://nbc-motors.herokuapp.com/sales', {
  method: 'POST',
  body: JSON.stringify(newBike),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => {
    toast('Sales Added Successful')
    console.log(data)
  });
}
    return (
        <div>
            <h1 className='text-2xl my-5 text-red-600'>Add a New Sale</h1>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleAddSales}>
                    <div className="mb-4">
                        <label for="name" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
                        <input type="text" name='name' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Customer Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="bikename" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Name</label>
                        <input type="text" name='bikename' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="color" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Color</label>
                        <input type="text" name='color' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Color" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="img" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sale Image</label>
                        <input type="text" name='img' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Image Link" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="date" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sale Date</label>
                        <input type="date" name='date' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Select Date" required="" />
                    </div> 
                    <button type="submit" className="my-3 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Sale</button>
                </form>
            </div>
        </div>
    );
};

export default AddSales;