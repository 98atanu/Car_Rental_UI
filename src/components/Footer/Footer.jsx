import React from 'react'
import { FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Car Rental</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo sapiente id.</p>
                    <br/>
                    <div className='flex items-center gap-3 '>
                        <FaLocationArrow/>
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                    <div className=' flex items-center gap-33'>
                        <FaMobileAlt/>
                        <p>+91 123456789</p>
                    </div>
                    <div>
                        <a href='#'>
                            <FaInstagram className='text-3xl '/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer