import React from 'react';
import Image from 'next/image';
import logo from '../../../Assets/Image/logo-light.jpeg';



export default function NavBar() {
  return (
    <div className='bg-white lg:px-[140px] border   top-0 left-0 sticky  z-20 w-full'>
     
      <div className='flex items-center justify-between py-4'>
        <div className='w-[150px]'>
          <Image src={logo} alt="" srcset="" />
        </div>
        <div className='flex items-center justify-center gap-x-8 '>
          <li className='hidden text-base font-normal list-none md:block font'>Introduce</li>
          <li className='hidden text-base font-normal list-none md:block'>Course</li>
          <li className='hidden text-base font-normal list-none md:block'>Books</li>
          <li className='hidden text-base font-normal list-none md:block'>Posts</li>
          <li className='hidden text-base font-normal list-none md:block'>Exams and mock exams</li>
          <li className='hidden text-base font-normal list-none md:block'>Forum</li>
          <li className='hidden text-base font-normal list-none md:block '>IELTS Correct</li>
        </div>
      </div>
    </div>
  )
}
