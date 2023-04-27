import React from "react";
import Image from "next/image";
import heroImage from "../../../Assets/Image/hero-banner.png";
import background from "../../../../public/bg-image.jpg";

export default function Hero() {
  return (
    <div className="container relative w-full min-h-screen mx-auto overflow-hidden bg-white max-w-screen-2xl">
      
      <div className="relative top-0 left-0 z-10 lg:grid grid xl:grid content-center lg:content-center lg:justify-items-center xl:justify-items-center 2xl:justify-items-center xl:content-center xl:grid-cols-2 grid-cols-1  lg:grid-cols-2  lg:px-[140px] 2xl:grid 2xl:content-center    justify-items-center">
        <div className="flex flex-col items-start justify-center px-2 text-black lg:px-0">
          <h1 className="text-5xl font-bold lg:text-7xl ">English ZIM</h1>
          <h3 className="py-6 text-2xl font-bold lg:text-3xl">Personalized English learning</h3>
          <p className="text-xl leading-relaxed">
            Exam preparation for IELTS, TOEIC is committed to output. The
            personalized teaching method frees up students learning ability, and
            the focused knowledge system helps students save 80% of their time
            and without pressure.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 py-4 lg:py-12">
            <button className="px-4 lg:px-16 font-medium hover:bg-[#bd001c]   py-4 rounded-full text-white bg-[#da1e39]">Level test English</button>
            <button className="px-4 py-4 hover:bg-[#ffbec8]  font-medium text-black bg-white border rounded-full lg:px-16">Schedule a trail lesson</button>
          </div>
          
        </div>
        <div className="w-full pb-4">
          <Image
            src={heroImage}
            className="lg:w-[600px] w-[350px]"
            alt="heroPhoto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
