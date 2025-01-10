import React, { useEffect, useState } from 'react';
import Style from './Footer.module.css';

export default function Footer() {
    const [counter, setcounter] = useState(0);
    useEffect(
        () => {
            setcounter(counter + 1);
        }, []);
    return <>

        <footer className='selection:bg-emerald-600'>
            <div className="data flex flex-col md:flex-row justify-center gap-5 bg-[#2c3e50] text-white p-16 ">
                <div className="location flex-1">
                    <h3 className='text-2xl font-bold py-5'>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <span>Clark, MO 65243</span>
                </div>
                <div className="web flex-1">
                    <h3 className='text-2xl font-bold py-5'>AROUND THE WEB</h3>
                    <div className="icons flex justify-center gap-3 cursor-pointer">
                        <i className='fab fa-facebook border p-2 rounded-full'></i>
                        <i className='fab fa-twitter border p-2 rounded-full'></i>
                        <i className='fab fa-linkedin border p-2 rounded-full'></i>
                        <i className='fas fa-globe border p-2 rounded-full'></i>
                    </div>
                </div>
                <div className="about flex-1">
                    <h3 className='text-2xl font-bold py-5'>ABOUT FREELANCER</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="copyright bg-[#1a252f] p-3 text-white">
                Copyright © My Website 2025
            </div>

        </footer>
    </>;
}
