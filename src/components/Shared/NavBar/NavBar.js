import React from 'react';
import Image from 'next/image';
import logo from '../../../Assets/Image/logo-light.jpeg';

export default function NavBar() {
  return (
    <div className='bg-white px-[120px] py-4 top-0 left-0 sticky  z-10 w-full'>
      <div className='flex items-center justify-between '>
        <div className='w-[150px]'>
          <Image src={logo} alt="" srcset="" />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <li className='list-none'>Introduce</li>
          <li className='list-none'>Course</li>
          <li className='list-none'>Books</li>
          <li className='list-none'>Posts</li>
        </div>
      </div>
    </div>
  )
}
