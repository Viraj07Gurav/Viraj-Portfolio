import React from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <header>
            <div className='fixed w-full py-4 z-50 backdrop-blur-3xl'>
                <div className='max-w-7xl mx-auto px-6 pb-2 border-b-1 border-teal-700'>
                    <div className='flex justify-between items-center'>
                        {/* logo */}
                        <div className='text-2xl font-bold text-zinc-800'>
                            <span>THE-</span>
                            <span className='text-teal-800 font-orbitron'>VIRAJ</span>
                        </div>
                        {/* menu */}
                        <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4">
                            {
                                navMenu.map((item, index) => (
                                    <a key={index} href={`#${item.id}`} className='hover:text-gray-700 '>{item.lable}</a>
                                ))
                            }
                        </div>
                        {/* button */}
                        <a
                            href="/Resume/Viraj_Gurav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            
                        >
                        <button className='flex items-center gap-2 outline-0 border rounded-3xl px-10 py-4 hover:border-teal-500'>
                            RESUME
                            <FaArrowRight />
                        </button>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar