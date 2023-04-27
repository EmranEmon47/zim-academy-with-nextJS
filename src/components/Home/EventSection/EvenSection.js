import React from "react";
import Image from "next/image";
import stopwatch from '../../../Assets/Image/stopwatch.png';
import user from '../../../Assets/Image/user.png';
import online from '../../../Assets/Image/wireless-symbol.png';


export default function EvenSection() {
  return (
    <section className="container relative min-h-screen mx-auto">
      <div className="absolute mt-1 bg-white lg:absolute rounded-2xl -top-5 lg:-top-36">
        {/* for experience section */}
        <div className="lg:flex lg:flex-row lg:items-center grid grid-cols-2 justify-items-center content-center lg:justify-center lg:rounded-t-2xl  lg:divide-x lg:divide-[#ed99aa]  bg-[#da1e39] px-2 py-2 lg:px-4  lg:py-10 ">
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">
              7 Years of Development
            </h5>
            <p className="text-[#ed99aa] font-medium text-lg">
              Personalized Education
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">4.223 Posts</h5>
            <p className="text-[#ed99aa] font-medium text-lg">Published</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">15 Centers</h5>
            <p className="text-[#ed99aa] font-medium text-lg">In Viet Nam</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">227 Titles</h5>
            <p className="text-[#ed99aa] font-medium text-lg">
              Intensive English
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">40,852 Trials</h5>
            <p className="text-[#ed99aa] font-medium text-lg">
              IELTS and TOEIC
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-8">
            <h5 className="text-xl font-semibold text-white">
              10,000 + Students
            </h5>
            <p className="text-[#ed99aa] font-medium text-lg">
              Vietnam and International
            </p>
          </div>
        </div>

        {/* upcoming event section */}
        <div className="flex flex-col divide-y">
          <div className="flex flex-row items-center justify-between px-8 pt-12 pb-4">
            {/* heading */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold ">Event</h3>
              <p className="text-lg font-normal">Upcoming events</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button className="flex flex-row items-center justify-center px-6 py-2 text-lg border rounded-full hover:bg-slate-100 gap-x-2 font-base border-slate-200">
                <Image src={online} alt="wirelessSmble" />
                Online
              </button>
              <button className="px-6 py-2 text-lg border rounded-full font-base hover:bg-slate-100 border-slate-200">
                Offline
              </button>
              <button className="px-6 py-2 text-lg border rounded-full font-base hover:bg-slate-100 border-slate-200">
                View all events
              </button>
            </div>
          </div>
          {/* event dates list */}
          <div className="grid content-center grid-cols-2 px-8 py-10 justify-items-start">
            {/* for each date */}

            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 py-4 pl-4 pr-40 rounded-xl group hover:bg-slate-100">
              <div className="flex flex-col items-center justify-center px-4 py-2 border border-gray-200 group-hover:bg-[#da1e39] group-hover:text-white rounded-xl">
                <h1 className="text-3xl font-normal ">26</h1>
                <p className="text-sm font-normal">April_</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                <h4 className="text-lg font-normal">
                  IELTS Online mock test on April 26
                </h4>
                <p className="text-sm font-light text-gray-400">
                  Listening, Reading, Writing, Speaking
                </p>
                <div className="flex flex-row items-center justify-center pt-5 gap-x-4">
                  <Image src={stopwatch} alt="clock" />
                  <p className="text-base font-normal rounded bg-slate-100">09:0-12:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">14:0-17:0</p>
                  <p className="text-base font-normal rounded bg-slate-100">18:0-21:0</p>
                  <Image src={user} alt="userProfile" />
                  <p className="text-base font-normal">7/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
