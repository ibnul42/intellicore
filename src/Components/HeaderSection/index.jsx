import React from 'react';
import './style.css';

const Header = ({name}) => {
  
  return (
    <div className="relative flex justify-center items-center">
      <img src="/Assets/hero.jpg" className='w-full min-h-[100px] max-h-96 object-cover object-top' alt="hero" />
      <h1 className="absolute text-3xl md:text-4xl text-white font-bold tracking-wider">{name}</h1>
    </div>
  )
}
export default Header;