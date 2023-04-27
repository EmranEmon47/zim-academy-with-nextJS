import React from "react";
import Image from "next/image";
import heroImage from "../../../Assets/Image/hero-banner.png";
import background from "../../../../public/bg-image.jpg";

export default function Hero() {
  return (
    <div className="container relative w-full min-h-screen mx-auto overflow-hidden bg-white max-w-screen-2xl">
      <div className="flex flex-row px-2">
        <div className="w-full   lg:grid grid xl:grid content-center lg:content-center lg:justify-items-center xl:justify-items-center 2xl:justify-items-center xl:content-center xl:grid-cols-2 grid-cols-1  lg:grid-cols-2  lg:px-[140px] 2xl:grid 2xl:content-center    justify-items-center">
          <div className="flex flex-col items-start justify-center px-2 text-black lg:px-0">
            
            <h1 className="text-5xl font-bold lg:text-7xl ">English ZIM</h1>
           
            <h3 className="py-6 text-2xl font-bold lg:text-3xl">
              Personalized English learning
            </h3>
            <p className="text-xl leading-relaxed">
              Exam preparation for IELTS, TOEIC is committed to output. The
              personalized teaching method frees up students learning ability,
              and the focused knowledge system helps students save 80% of their
              time and without pressure.
            </p>
            <div className="flex flex-row items-center justify-center gap-4 py-4 lg:py-12">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <button className="px-4 lg:px-16 font-medium hover:bg-[#bd001c]   py-4 rounded-full text-white bg-[#da1e39]">
                Level test English
              </button>
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-4 hover:bg-[#ffbec8]  font-medium text-black bg-white border rounded-full lg:px-16">
                Schedule a trail lesson
              </button>
              </a>
            </div>
          </div>
          <div className="w-full pb-48 lg:pb-4 ">
            <Image
              src={heroImage}
              className="w-full"
              alt="heroPhoto"
              priority
            />
          </div>
        </div>

        {/* experience chart */}
        <div className="lg:flex rounded-3xl lg:rounded gap-2  w-full container mx-auto lg:flex-row lg:items-center grid grid-cols-2 justify-items-center content-start lg:justify-center lg:rounded-t-2xl px-2 py-2 lg:divide-x lg:divide-[#ed99aa]  bg-[#da1e39]  lg:px-4  lg:py-10 absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">
              7 Years of Development
            </h5>
            <p className="text-[#ed99aa] font-medium text-sm lg:text-lg">
              Personalized Education
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">4.223 Posts</h5>
            <p className="text-[#ed99aa] font-medium  text-sm lg:text-lg">Published</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">15 Centers</h5>
            <p className="text-[#ed99aa] font-medium text-sm lg:text-lg">In Viet Nam</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">227 Titles</h5>
            <p className="text-[#ed99aa] text-sm font-medium lg:text-lg">
              Intensive English
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">40,852 Trials</h5>
            <p className="text-[#ed99aa] font-medium text-sm lg:text-lg">
              IELTS and TOEIC
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:px-8">
            <h5 className="text-sm font-semibold text-white lg:text-xl">
              10,000 + Students
            </h5>
            <p className="text-[#ed99aa] font-medium text-sm lg:text-lg">
              Vietnam 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
