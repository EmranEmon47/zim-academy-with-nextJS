import React from "react";
import Image from "next/image";
import heroImage from "../../../Assets/Image/banner.png";
import background from "../../../../public/bg-image.jpg";

export default function Hero() {
  return (
    <div className="container relative w-full min-h-screen mx-auto overflow-hidden max-w-screen-2xl">
      <div className="absolute inset-0 object-cover bg-center bg-no-repeat bg-cover">
        <Image src={background} alt="bg-image" className="" srcset="" />
      </div>
      <div class="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative top-0 left-0 z-10 grid content-center grid-cols-2 gap-4 px-[120px] pt-20 justify-items-center">
        <div className="flex flex-col items-start justify-center text-white">
          <h1 className="font-bold text-7xl ">English ZIM</h1>
          <h3 className="py-6 text-3xl font-bold">Personalized English learning</h3>
          <p className="text-xl leading-relaxed">
            Exam preparation for IELTS, TOEIC is committed to output. The
            personalized teaching method frees up students learning ability, and
            the focused knowledge system helps students save 80% of their time
            and without pressure.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 py-12">
            <button className="px-16 font-medium py-4 rounded-full text-white bg-[#da1e39]">Level test English</button>
            <button className="px-16 py-4 font-medium text-black bg-white rounded-full">Schedule a trail lesson</button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={heroImage}
            className="w-[600px]"
            alt="heroPhoto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
