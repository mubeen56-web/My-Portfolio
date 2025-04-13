import React from 'react'
import {motion} from 'framer-motion'
import Reveal from './Reveal'

const Experience = () => {
    const experiences=[
        {
            company:'First Company',
            period:'2022-Present',
            description:'Description of your experience in this company.',
        },
        {
            company:'Second Company',
            period:'2023-Present',
            description:'Description of your experience in this company.',
        },
        {
            company:'Third Company',
            period:'2024-Present',
            description:'Description of your experience in this company.',
        },
    ]
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h2 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h2>
        <motion.div
        className='space-y-8'
        initial='hidden'
        animate='visible'
        >
            {experiences.map((experience,index)=>( 
                <Reveal key={index}>
                <motion.div
                key={index}
                initial='hidden'
                whileInView='visible'
                viewport={{once:false,amount: 0.3}}
                transition={{duration:1}}
                className=' border border-purple-600 p-6 rounded-lg shadow:md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold '>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-3'>{experience.description}</p>
                {/* Fixed: Removed incorrect self-closing motion.div and properly closed it */}
                </motion.div>
                </Reveal>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience