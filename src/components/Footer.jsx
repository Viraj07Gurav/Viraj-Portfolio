import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='py-12 border-t border-zinc-200 bg-gradient-to-b from-slate-50 to-teal-100'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='mb-6 md:mb-0'>
                    <span className='uppercase text-2xl fontbold'>The-Viraj</span>
                </div>

                <div className="flex space-x-8 mb-6">
                    
                    <a className='text-teal-800' href="https://github.com/Viraj07Gurav" target='_blank'>
                        <FaGithub size={25}/>
                    </a>

                      <a className='text-teal-800' href="mailto:viraj07gurav@gmail.com">
                        <MdOutlineEmail size={28} />
                    </a>
                    <a className='text-teal-800' href="https://www.linkedin.com/in/viraj-gurav/" target='_blank'>
                       <FaLinkedin size={25}/>
                    </a>
                  
                </div>
                <div>
                    @ 2026 The-Viraj Developer, All rights reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer