import React from 'react'
import CarPng from '../../assets/car1.png'

const About = () => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 sm:min-h-[600px]'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div>
                    <img src={CarPng} alt="" />
                </div>
                <div className='space-y-5 sm:p-16 pb-6'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore fugit ullam ipsa aperiam sint!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, sapiente.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About