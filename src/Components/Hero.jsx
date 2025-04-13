import React from 'react';
import profile from '../assets/picture.png';
import ShinyEffect from './ShinyEffect';
import { TypeAnimation } from 'react-type-animation';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Typing Animation */}
          <TypeAnimation
            sequence={['Fullstack Dev', 1000, 'Web Designer', 1000, 'Consultant', 1000]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
          />

          {/* Main Title */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HEY I AM <br />
            <span className='text-purple-500'>MUHAMMAD MUBEEN</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 md:text-2xl max-w-[300px] md:max-w-[500px] text-lg mb-6'
          >
            I am passionate fullstack developer
          </motion.p>

          {/* Buttons & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'
          >
            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(128,0,128,0.5)' }}
              transition={{ duration: 0.3 }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
            >
              Download CV
            </motion.button>

            {/* Social Icons */}
            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
              <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href='#'>
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href='#'>
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href='#'>
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.img
          src={profile}
          className='w-[300px] md:w-[450px]'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
      >
        <p className='text-gray-200 mr-6'>My Tech Stack</p>
        <DiHtml5 className='mx-2 text-orange-600' />
        <DiCss3 className='mx-2 text-blue-600' />
        <DiJavascript1 className='mx-2 text-yellow-600' />
        <DiReact className='mx-2 text-blue-600' />
        <DiNodejsSmall className='mx-2 text-green-600' />
      </motion.div>

      {/* Shiny Effect */}
      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={400} />
      </div>
    </div>
  );
};

export default Hero;
