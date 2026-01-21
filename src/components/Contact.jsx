import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const handelForm=()=>{
    
}
const Contact = () => {
    return (
        <div className='py-16' id="contact">
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-6'>
                    <h2 className='font-bold text-4xl sm:5xl mb-4'>Get In <span className='text-teal-700'>touch</span></h2>
                    <p className='text-zinc-600  '>Have a project in mind or want to discuss potential opportunities.</p>
                </div>

                {/* form */}
                <div className='max-w-3xl  mx-auto'>
                    <form action="" className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                            <input type="text" placeholder='Enter Name' className='border border-zinc-600 py-3 px-4 w-full rounded' />
                            <input type="email" placeholder='Enter Email' className='border border-zinc-600 py-3 px-4 w-full rounded' />

                        </div>
                        <div>
                            <input type="text" placeholder='Enter subject' className='border border-zinc-600 py-3 px-4 w-full rounded' />

                        </div>
                        <div>
                            <textarea type="text" placeholder='Enter message' className='border border-zinc-600 py-3 px-4 h-40 w-full rounded' />

                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='flex justify-center items-center gap-4 px-10 py-4 rounded-full bg-zinc-800 text-white cursor-pointer hover:bg-zinc-600'>Send Message <FaArrowRight /></button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact