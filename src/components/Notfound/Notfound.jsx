import React, { useEffect, useState } from 'react';
import Style from './Notfound.module.css';

export default function Notfound() {
    const [counter, setcounter] = useState(0);
    useEffect(
        () => {
            setcounter(counter + 1);
        }, []);
    return <>
        <section className='min-h-96'>



            <div className='m-auto p-10'>

                <h1 className='font-extrabold text-white'>404</h1>
                <h3 className='text-white italic'>This is not the page you're looking for.</h3>
            </div>

        </section>
    </>;
}
