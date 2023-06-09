import Image from "next/image";
import React from "react";
import blogHero from "../../../Assets/Image/blog-large.jpeg";
import blog1 from "../../../Assets/Image/blog1.jpg";

export default function Blog() {
  return (
    <section className="container relative w-full min-h-screen mx-auto mt-8 overflow-hidden lg:-top-36">
      <div className="px-2 py-12 bg-white lg:px-8 rounded-2xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-2 py-2">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <h3 className="text-2xl font-semibold ">Blog</h3>
            </a>
            <p className="text-lg font-normal">
              Resources for IELTS and TOEIC test preparation according to the
              focus of the test knowledge
            </p>
          </div>
          <div>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <button className="hidden px-6 py-2 text-lg border rounded-full md:block font-base hover:bg-slate-100 border-slate-200">
              View all Blogs
            </button>
            </a>
          </div>
        </div>

        {/* post section */}
        <div className="grid grid-cols-1 gap-2 lg:grid lg:content-start lg:grid-cols-2 lg:gap-4 lg:pt-8 lg:justify-items-start">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start gap-4 px-4 py-4 border hover:bg-slate-100 border-slate-200 rounded-2xl">
            <Image src={blogHero} className="w-full" alt="book" />
            <div className="flex flex-row items-center justify-between gap-x-24 lg:gap-x-96 ">
              <h5 className="text-xs text-red-500 uppercase">
                English English
              </h5>
              <h4 className="text-xs uppercase text-slate-400">
                April 25, 2023
              </h4>
            </div>
            <h3 className="font-semibold text-medium">
              Format for completing the National High School English passage for
              students
            </h3>
            <h5 className="text-medium text-slate-500">
              The form of completing the national high school English passage is
              an advanced form of work, causing many difficulties for students
              in the process of studying and taking exams.
            </h5>
            <p className="mt-auto text-sm">Mac Thi Nguyet Minh</p>
          </a>

          <div className="flex flex-col gap-4">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 border lg:flex-row hover:bg-cyan-100 gap-y-4 border-slate-200 rounded-2xl">
              <Image src={blog1} className="w-full lg:w-1/2" alt="book" />
              <div className="flex flex-col items-start justify-between gap-4">
                <div className="flex flex-row items-center justify-between gap-x-24">
                  <h5 className="text-xs text-red-500 uppercase">
                    English English
                  </h5>
                  <h5 className="ml-auto text-xs uppercase text-slate-400">
                    April 25, 2023
                  </h5>
                </div>

                <h3 className="font-semibold text-medium">
                  Format for completing the National High School English passage
                  for students
                </h3>

                <p className="mb-auto text-sm">Mac Thi Nguyet Minh</p>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 border lg:flex-row hover:bg-cyan-100 gap-y-4 border-slate-200 rounded-2xl">
              <Image src={blog1} className="w-full lg:w-1/2" alt="book" />
              <div className="flex flex-col items-start justify-between gap-4">
                <div className="flex flex-row items-center justify-between gap-x-24">
                  <h5 className="text-xs text-red-500 uppercase">
                    English English
                  </h5>
                  <h5 className="ml-auto text-xs uppercase text-slate-400">
                    April 25, 2023
                  </h5>
                </div>

                <h3 className="font-semibold text-medium">
                  Format for completing the National High School English passage
                  for students
                </h3>

                <p className="mb-auto text-sm">Mac Thi Nguyet Minh</p>
              </div>
            </div>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 border lg:flex-row hover:bg-cyan-100 gap-y-4 border-slate-200 rounded-2xl">
              <Image src={blog1} className="w-full lg:w-1/2" alt="book" />
              <div className="flex flex-col items-start justify-between gap-4">
                <div className="flex flex-row items-center justify-between gap-x-24">
                  <h5 className="text-xs text-red-500 uppercase">
                    English English
                  </h5>
                  <h5 className="ml-auto text-xs uppercase text-slate-400">
                    April 25, 2023
                  </h5>
                </div>

                <h3 className="font-semibold text-medium">
                  Format for completing the National High School English passage
                  for students
                </h3>

                <p className="mb-auto text-sm">Mac Thi Nguyet Minh</p>
              </div>
            </div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
