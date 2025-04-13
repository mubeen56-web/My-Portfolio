import React from 'react'
import {motion} from 'framer-motion'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'
import Reveal from './Reveal'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
        <Reveal>
        <div className='grid md:grid-cols-2 place-items-center'>
            <div>
                <div className='text-gray-300 my-3'>
                    <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                    <p className='text-justify leading-7 w-11/12 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero maxime eos error odit ratione fugiat impedit voluptas consequuntur quibusdam accusamus pariatur dignissimos, consectetur reiciendis esse. Maiores autem iure commodi.</p>
                </div>
                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-gray-800/40 p-4 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl text-white font-semibold'>11 <span> +</span></h3>
                        <p className='text-xs md:text-base'><span>Projects</span></p>
                    </div>
                    <div className='bg-gray-800/40 p-4 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl text-white font-semibold'>5 <span>+</span></h3>
                        <p className='text-xs md:text-base'><span>Years of Experience</span></p>
                    </div>
                    <div className='bg-gray-800/40 p-4 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl text-white font-semibold'>30 <span>+</span></h3>
                        <p className='text-xs md:text-base'><span>Happy clients</span></p>
                    </div>
                </div>
            </div>
            <form action="https://getform.io/f/aejrvrmb" method='POST'id='form'
            className='max-w-6x1 p-5 md:p-12'
            >
            <p className='text-gray-100 font-bold text-xl mb-2'>Lets connect!</p>
            <input type="text" name="name" id="name" placeholder='Your Name...' className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4' />
            <input type="Email" name="Email" id="Email" placeholder='Your Email...' className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4' />
            <textarea
            name='textarea' id='textarea' cols='30' rows='4' placeholder='Your Message...' 
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 '
            />
            <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Send Message</button>
            </form>
        </div>
        </Reveal>
    </div>
  )
}

export default Contact