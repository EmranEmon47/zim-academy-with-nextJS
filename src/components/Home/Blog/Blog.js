import Image from "next/image";
import React from "react";
import blogHero from "../../../Assets/Image/blog-large.jpeg";
import blog1 from "../../../Assets/Image/blog1.jpg";

export default function Blog() {
  return (
    <section className="container w-full min-h-screen mx-auto mt-8 overflow-hidden">
      <div className="px-8 py-12 bg-white rounded-2xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="text-2xl font-semibold ">Book</h3>
            <p className="text-lg font-normal">
              Resources for IELTS and TOEIC test preparation according to the
              focus of the test knowledge
            </p>
          </div>
          <div>
            <button className="px-6 py-2 text-lg border rounded-full font-base hover:bg-slate-100 border-slate-200">
              View all books
            </button>
          </div>
        </div>

        {/* post section */}
        <div className="grid content-start grid-cols-2 gap-4 pt-8 justify-items-start">
          <div className="flex flex-col items-start justify-start gap-4 px-4 py-4 border hover:bg-slate-100 border-slate-200 rounded-2xl">
            <Image src={blogHero} className="w-full" alt="book" />
            <div className="flex flex-row items-center justify-between">
              <h5 className="text-xs text-red-500 uppercase">
                English English
              </h5>
              <h5 className="text-xs uppercase text-slate-400">
                April 25, 2023
              </h5>
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
            <p className="mt-auto text-sm">Ebook</p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-start gap-4 px-4 py-4 border hover:bg-cyan-100 gap-y-4 border-slate-200 rounded-2xl">
              <Image src={blog1} className="w-1/2" alt="book" />
             <div className="flex flex-col items-start justify-center">
             <div className="flex flex-row items-center justify-between">
                <h5 className="text-xs text-red-500 uppercase">
                  English English
                </h5>
                <h5 className="text-xs uppercase text-slate-400">
                  April 25, 2023
                </h5>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h3 className="font-semibold text-medium">
                  Format for completing the National High School English passage
                  for students
                </h3>

                <p className="mb-auto text-sm">Print book</p>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
