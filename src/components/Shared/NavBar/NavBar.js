import React from 'react';
import Image from 'next/image';
import logo from '../../../Assets/Image/logo-light.jpeg';



export default function NavBar() {
  return (
    <div className='bg-white lg:px-[140px]  top-0 left-0 sticky  z-20 w-full'>
     
      <div className='flex items-center justify-between py-4'>
        <div className='w-[150px]'>
          <Image src={logo} alt="" srcset="" />
        </div>
        <div className='flex items-center justify-center invisible gap-4 lg:visible'>
          <li className='text-base font-normal list-none font'>Introduce</li>
          <li className='text-base font-normal list-none'>Course</li>
          <li className='text-base font-normal list-none'>Books</li>
          <li className='text-base font-normal list-none'>Posts</li>
          <li className='text-base font-normal list-none'>Exams and mock exams</li>
          <li className='text-base font-normal list-none'>Forum</li>
          <li className='text-base font-normal list-none'>IELTS Correct</li>
        </div>
      </div>
    </div>
  )
}
