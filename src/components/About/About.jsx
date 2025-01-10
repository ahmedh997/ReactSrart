import React, { useEffect, useState } from 'react';
import Style from './About.module.css';

export default function About() {
    const [counter, setcounter] = useState(0);
    useEffect(
        () => {
            setcounter(counter + 1);
        }, []);
    return <>
        <section className='min-h-96 my-5 py-6'>
            <h1 className='uppercase text-white mt-5 font-bold pt-12'>about component</h1>
            <div className='lines flex justify-center align-items-center gap-4 m-4'>

                <div className='w-24 h-1 bg-white translate-y-1'></div>
                <i className='fas fa-star text-white'></i>
                <div className='w-24 h-1 bg-white translate-y-1'></div>

            </div>
            <div className="text-left flex flex-col md:flex-row p-5 mx-3 justify-center align-items-center gap-3 text-white">
                <p className='p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </section>
    </>;
}
