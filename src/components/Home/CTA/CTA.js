import Image from 'next/image'
import React from 'react'
import ctaPhoto from '../../../Assets/Image/cta.png'

export default function CTA() {
  return (
    <div className='relative w-full px-4 py-4 mx-auto my-2 overflow-hidden lg:py-0 lg:px-0 lg:container lg:mb-8 lg:-top-36'>
        <div className='flex flex-col items-center gap-4 justify-center py-4 lg:py-0 px-4 lg:px-10 bg-gradient-to-r from-[#000] via-[#154d3f] to-[#33c09c] lg:flex-row rounded-2xl '>
            <div className='flex flex-col items-start justify-center w-full gap-4'>
                <h1 className='text-4xl font-semibold text-white'>IELTS Correct by Chat GPT</h1>
                <p className='text-base font-normal text-white'>Mark IELTS Writing in detail and fast.</p>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <button className='px-8 py-4 mt-4 text-base font-medium bg-white rounded-full'>Click the post now</button>
                </a>
            </div>
            <div>
                <Image src={ctaPhoto} className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}
