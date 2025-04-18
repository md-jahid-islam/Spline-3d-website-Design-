import React from 'react'
import { motion } from 'framer-motion'

const imagesSetOne = [
  "/images/images9.png",
  "/images/images6.png",
  "/images/images5.png"
];

const imagesSetTwo = [
  "/images/images20.png",
  "/images/images12.png",
  "/images/images8.png"
];

const ThreeComponents = () => {
  return (
    <div className="container px-4 pt-[100px]">
      {/* First Row */}
      <div className='flex justify-center items-center gap-[40px] flex-wrap'>
        {imagesSetOne.map((src, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='w-[320px] h-[240px] rounded-es-full shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-500'
            src={src}
            alt="img"/>
        ))}
      </div>

      {/* Second Row */}
      <div className='flex justify-center items-center gap-[40px] pt-[50px] flex-wrap'>
        {imagesSetTwo.map((src, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='w-[320px] h-[240px] rounded-s-full shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-500'
            src={src}
            alt="img"/>
        ))}
      </div>

      {/* Third Row */}
      <div className='flex justify-center items-center pt-[50px]'>
        <motion.img
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='w-[320px] h-[240px] rounded-b-full shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-500'
          src="/images/images21.png"
          alt="img"/>
      </div>
    </div>
  )
 }

 export default ThreeComponents;
