import Image from 'next/image'
import React from 'react';
import logo from '../../../Assets/Image/logo-light.jpeg';
import logo2 from '../../../Assets/Image/footerLogo.png';


export default function Footer() {
  return (
    <div className=' py-16  bg-[#28282d]'>
      <div className='container flex flex-col items-start justify-between gap-8 px-4 mx-auto text-white lg:flex-row'>
        <div>
          <Image src={logo} className='w-[150px] bg-white py-2 px-2' alt="" />
        </div>
        <div>
          <p>Eduvator Joint Stock Company</p>
          <p>Certificate number: 0107346642</p>
        </div>
        <div>
          <p>License date: 07/03/2016.</p>
          <p>Place of issue: Hanoi Department of Planning and Investment.</p>
        </div>
        <div>
          <p>Operation license of IELTS test</p>
          <p>preparation center No. 4478 /GCN-SGDĐT Hanoi.</p>
        </div>
        <div>
          <Image src={logo2} className='w-[150px]' alt="" />
        </div>
      </div>
    </div>  
  )
}
