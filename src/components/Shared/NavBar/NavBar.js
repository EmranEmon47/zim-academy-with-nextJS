import React from 'react';
import Image from 'next/image';
import logo from '../../../Assets/Image/logo-light.jpeg';



export default function NavBar() {
  return (
    <div className='bg-white lg:px-[140px] border   top-0 left-0 sticky  z-20 w-full'>
     
      <div className='flex items-center justify-between py-4'>
        <div className='w-[150px] pl-2'>
         <a href="#">
         <Image src={logo} alt="" srcset="" />
         </a>
        </div>
        <div className='flex items-center justify-center gap-x-8 '>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block font'>Introduce</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block'>Course</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block'>Books</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block'>Posts</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block'>Exams and mock exams</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block'>Forum</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='hidden text-base font-normal hover:text-[#bd001c] list-none md:block '>IELTS Correct</a>
        </div>
      </div>
    </div>
  )
}
