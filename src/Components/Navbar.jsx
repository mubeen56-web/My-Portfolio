import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // ✅ Corrected menuVariants (Converted to an object)
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      }
    },
    closed: {
      x: '-100%', // ✅ Fixed extra space issue
      transition: {
        stiffness: 20,
        damping: 15,
      }
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-75 backdrop-blur-md z-50 '>
      <div className='max-w-[1300px] text-gray-200 text-xl  mx-auto flex justify-between items-center px-12 h-20'>
        <a href="#">Muhammad Mubeen</a>
        <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
          <li><Link to='skills' smooth={true} offset={50} duration={500}>About</Link></li>
          <li><Link to='portfolio' smooth={true} offset={50} duration={500}>Portfolio</Link></li>
          <li><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>
        <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        
        {/* ✅ Fixed motion.div */}
        <motion.div 
          initial="false" // ✅ Fixed
          animate={nav ? "open" : "closed"} // ✅ Fixed
          variants={menuVariants} // ✅ Fixed
          className='fixed top-0 left-0 w-full md:hidden  min-h-screen bg-gray-900 z-40'
        >
          <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
            <li ><Link onClick={closeNav}  to='skills' smooth={true} offset={50} duration={500}>About</Link></li>
            <li ><Link onClick={closeNav}  to='portfolio' smooth={true} offset={50} duration={500}>Portfolio</Link></li>
            <li ><Link onClick={closeNav}  to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
