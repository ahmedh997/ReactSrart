import React from 'react';
import logo from '../../assets/images/avataaars.svg';
export default function Home() {
  return (
    <section className='bg-[#1abc9c] text-center'>

      <div className="container text-white text-center my-20 pt-10">
        <img src={logo} width={300} alt="Main logo" className='text-center inline logo-2 cursor-pointer' />
        <h1 className=' uppercase font-bold py-3'>
          start Framework
        </h1>
        <div className='lines flex justify-center align-items-center gap-4 m-4'>

          <div className='w-24 h-1 translate-y-1 bg-white'></div>
          <i className='fas fa-star text-white'></i>
          <div className='w-24 h-1 translate-y-1 bg-white '></div>

        </div>


        <h5>Graphic Artist - Web Designer - Illustrator
        </h5>

      </div>

    </section>
  );
}
