import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='my-3 text-2xl text-red-600'>Question and Answers</h1>

            <div className='row gap-4 mx-auto'>
                <article className='col-lg-4 col-md-6 col-12 shadow-lg p-4'>
                    <h1 className='font-bold text-2xl'>Difference Between Javascript and NodeJs</h1>
                    <br />
                    <p>Javascript is a Programming language which is actually run in browser only.On the other hand NodeJs is a Interpreter and Runtime for Javascript language.
                        Javascript use for client side and show data and dynamically in UI but NodeJs use for server side scripting to load data from database and send data to database and many more things.
                        Javascript use V8 engine on chrome, Spyder Monkey engine on Firefox browser on the other hand NodeJs Run Outside Browser and Use only Chrome V8 engine.
                    </p>
                </article>
                <article className='col-12 col-md-6 col-lg-4 shadow-lg p-4'>
                    <h1 className='font-bold text-2xl'>When should you use NodeJs and when should you use Mongodb</h1>
                    <br />
                    <p>
                        NodeJs is a Interpreter and Mongodb is a Database. Nodejs use for Connect client side with database, when Mongodb is use for store data in the database. Using NodeJs we can create get, post, put and delete api for reading, posting, updating and deleting data from Mongodb and other database on the other hand Mongodb keep 
                        database information keep changing based on client req to server what should do with this data.
                    </p>
                </article>
                <article className='col-12 col-md-6 col-lg-4 shadow-lg p-4'>
                    <h1 className='font-bold text-2xl'>Difference Between SQL and No SQL Databases</h1>
                    <br />
                    <p>
                    SQL databases are called as Relational Databases RDBMS. On the other hand NoSQL database are  called as non-relational or distributed database.
                    SQL databases are vertically scalable when No SQL databases are horizontally scalable. SQL Databases are table based but No SQL Databases are document, key value pair like JSON.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;