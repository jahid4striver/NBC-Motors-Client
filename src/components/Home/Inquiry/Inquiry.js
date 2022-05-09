import React from 'react';
import { toast } from 'react-toastify';
import '../../Home/Bikes/Bikes.css'


const Inquiry = () => {

const handleAddInquiry= (e)=>{
    e.preventDefault();
const name= e.target.name.value;
const mobile= e.target.mobile.value;
const bikename= e.target.bikename.value;
const color= e.target.color.value;
const description= e.target.description.value;
const date=e.target.date.value;

const newInquiry={name,mobile, bikename,color, description, date};


fetch('https://nbc-motors.herokuapp.com/inquiry', {
  method: 'POST',
  body: JSON.stringify(newInquiry),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => {
    toast('Requirement Submited')
    console.log(data)
  });
  e.target.reset();
}
    return (
        <div>
            <h1 className='text-2xl my-5 text-red-600 head-title'>What's Your Requirement?</h1>
            <div className='w-75 max-w-lg mx-auto'>
                <form onSubmit={handleAddInquiry}>
                    <div className="mb-4">
                        <label for="name" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input type="text" name='name' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="mobile" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Mobile No</label>
                        <input type="text" name='mobile' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Mobile No" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="bikename" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Model</label>
                        <input type="text" name='bikename' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Model Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="color" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Color</label>
                        <input type="text" name='color' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Color" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comments</label>
                        <input type="text" name='description' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Write Something About Your Requirement" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="date" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Approximate Delevery Date</label>
                        <input type="date" name='date' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Select Delevery Date" required="" />
                    </div>
                    <button type="submit" className="my-3 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Your Requirement</button>
                </form>
            </div>
        </div>
    );
};

export default Inquiry;