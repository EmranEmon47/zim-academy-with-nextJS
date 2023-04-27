import React from "react";
import Image from "next/image";
import stopwatch from '../../../Assets/Image/stopwatch.png';
import user from '../../../Assets/Image/user.png';
import online from '../../../Assets/Image/wireless-symbol.png';
import Link from "next/link";


export default function EvenSection() {
  return (
    <section className="container min-h-screen mx-auto">
      <div className="bg-white rounded-b-2xl">
       
      

        {/* upcoming event section */}
        <div className="flex flex-col divide-y">
          <div className="flex flex-row items-center justify-between px-8 pt-12 pb-4">
            {/* heading */}
            <div className="flex flex-col gap-2">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-semibold ">Event</h3>
              </a>
              <p className="text-lg font-normal">Upcoming events</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button className="flex flex-row items-center justify-center px-6 py-2 text-lg border rounded-full hover:bg-slate-100 gap-x-2 font-base border-slate-200">
                <Image src={online} alt="wirelessSmble" />
                Online
              </button>
              <button className="hidden px-6 py-2 text-lg border rounded-full md:block font-base hover:bg-slate-100 border-slate-200">
                Offline
              </button>
              <button className="hidden px-6 py-2 text-lg border rounded-full md:block font-base hover:bg-slate-100 border-slate-200">
                View all events
              </button>
            </div>
          </div>
          {/* event dates list */}
          <div className="grid content-center grid-cols-1 px-2 mx-auto lg:grid justify-items-center lg:content-center lg:grid-cols-2 lg:px-8 lg:py-10 lg:justify-items-start">
            {/* for each date */}

          
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div  className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
           
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-start justify-center gap-4 py-4 lg:pl-4 lg:pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center lg:pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" className="hidden md:block" />
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">09:0-12:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">14:0-17:0</p>
                  <p className="hidden text-base font-normal rounded md:block bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            </a>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
