import React, { useEffect, useState } from 'react';
import Style from './Portfolio.module.css';
import image1 from '../../assets/images/poert1.png';
import image2 from '../../assets/images/port2.png';
import image3 from '../../assets/images/port3.png';

export default function Portfolio() {
    const [counter, setcounter] = useState(0);
    useEffect(
        () => {
            setcounter(counter + 1);
        }, []);
    return <>

        <section className='min-h-96 my-5 py-6'>
            <h1 className='uppercase text-white mt-5 font-bold pt-12'>Portfolio component</h1>
            <div className='lines flex justify-center align-items-center gap-4 m-4'>

                <div className='w-24 h-1 bg-white translate-y-1 '></div>
                <i className='fas fa-star text-white'></i>
                <div className='w-24 h-1 bg-white translate-y-1'></div>

            </div>
            <div className="images flex md:flex-row flex-wrap gap-6 align-items-center justify-center p-6 mx-5">
                <img className='rounded-lg' src={image1} width={340} alt="Portfolio Image 1" />
                <img className='rounded-lg' src={image2} width={340} alt="Portfolio Image 2 " />
                <img className='rounded-lg' src={image3} width={340} alt="Portfolio Image 3 " />
                <img className='rounded-lg' src={image1} width={340} alt="Portfolio Image 1" />
                <img className='rounded-lg' src={image2} width={340} alt="Portfolio Image 2 " />
                <img className='rounded-lg' src={image3} width={340} alt="Portfolio Image 3 " />
            </div>
        </section>
    </>;
}
