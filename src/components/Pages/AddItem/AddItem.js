import React from 'react';

const AddItem = () => {

const handleAddItem= (e)=>{
    e.preventDefault();
const model= e.target.model.value;
const color= e.target.color.value;
const price= e.target.price.value;
const description= e.target.description.value;
const supplier= e.target.supplier.value;
const quantity= parseInt(e.target.quantity.value);

const newBike={model, color, price, description, supplier, quantity};


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newBike),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => console.log(data));
}
    return (
        <div>
            <h1 className='text-2xl my-5 text-red-600'>Add a New Item</h1>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleAddItem}>
                    <div className="mb-4">
                        <label for="model" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Model</label>
                        <input type="text" name='model' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Model Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="color" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Color</label>
                        <input type="text" name='color' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Color" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike Price</label>
                        <input type="number" name='price' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bike Price" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description</label>
                        <input type="text" name='description' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Description" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="supplier" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Supplier Name</label>
                        <input type="text" name='supplier' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Supplier Name" required="" />
                    </div>
                    <div className="mb-4">
                        <label for="quantity" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                        <input type="number" name='quantity' id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={0} required="" readOnly/>
                    </div>
                  
                    <button type="submit" className="my-3 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;