import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'

const handleWork=()=>{

}
const Hero = () => {
    return (
        <div className='min-h-screen flex items-center bg-teal-50 ' id="">
            <div className="max-w-7xl mx-auto px-6 mt-40 md:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 item-center">
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl sm:text-7xl md:text-6xl font-bold'>
                            <span>Hi, I'm <span className='text-teal-800'>Viraj</span></span>
                            <br />
                        </h1>
                        <h3 className='text-3xl lg:text-4xl md:text-4xl mb-2'><span className='text-teal-900'>Fullstack Developer</span></h3>
                        <p className='text-zinc-600  pt-4 mb-4 leading-6'>I craft immersive web experiences using modern frontend and backend technologies. I’m an IT graduate and full-stack developer skilled in React, Java, PHP, and modern web tools. I enjoy building responsive applications and solving real-world problems through code.</p>
                        {/* button */}
                        <div className='flex flex-col md:flex-row items-center gap-4 mt-8'>
                            <a href="#work" className='decoration-none transition-all duration-300'>
                            <button  className="bg-black text-gray-100 rounded-full px-10 py-4 flex items-center gap-2 " onClick={handleWork}>See my Work
                                <FaArrowRight/>
                            </button>
                            </a>
                            <a href="#contact" className='decoration-none transition-all duration-300'>
                            <button className="rounded-full border border-teal-600 px-10 py-4 flex items-center gap-2">Contact me
                                 <FaArrowRight/>
                            </button>
                            </a>
                        </div>

                    </div>
                    {/* right side */}
                    <div className='flex justify-center'>
                        {/* border-dashed border-2  */}
                        <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'> 
                            <div className='absolute inset-0 rounded-2xl overflow-hidden '>
                                <img className='w-full h-full object-cover' src={assets.myImage2} alt="profile" />
                            </div>
                            <div className='absolute -bottom-6 -right-6 w-32 h-32 border border-slate-600/20 rounded-xl overflow-hidden'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <div className='text-center'>
                                    <p className='text-white text-2xl font-orbitron'>1+</p>
                                    <p className='text-white text-sm font-orbitron'>years Exp</p>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero