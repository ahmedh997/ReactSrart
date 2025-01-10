import React, { useEffect, useState } from 'react';
import Style from './Contact.module.css';

export default function Contact() {
    const [counter, setcounter] = useState(0);
    useEffect(
        () => {
            setcounter(counter + 1);
        }, []);
    return <>

        <section className='min-h-96 my-5 py-6'>
            <h1 className='text-uppercase text-white mt-5 font-bold pt-12'>Contact Section</h1>
            <div className='lines flex justify-center align-items-center gap-4 m-4'>

                <div className='w-24 h-1 bg-white translate-y-1 '></div>
                <i className='fas fa-star text-white'></i>
                <div className='w-24 h-1 bg-white translate-y-1'></div>

            </div>



            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Name</label>
                    <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
                </div>
                <div className="mb-5">
                    <label for="number" className="block mb-2 text-sm font-medium text-white dark:text-white">Your age</label>
                    <input type="number" id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-emerald-800 hover:bg-emerald-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

        </section>
    </>;
}
