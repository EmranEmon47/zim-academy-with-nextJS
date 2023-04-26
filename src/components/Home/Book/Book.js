import Image from "next/image";
import React from "react";
import bookHero from "../../../Assets/Image/book-large.png";
import book1 from "../../../Assets/Image/book1.png";

export default function Book() {
  return (
    <section className="container relative min-h-screen mx-auto -top-36">
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
        <div className="grid grid-flow-col grid-rows-2 gap-4 pt-8">
          <div className="flex flex-col items-start justify-start col-span-2 row-span-2 gap-4 px-4 py-4 border hover:bg-slate-100 border-slate-200 rounded-2xl">
            <Image src={bookHero} className="" alt="book" />
            <h3 className="text-xl">
              Book Understanding Academic Words for IELTS Writing Task 1 -
              Academic Vocabulary in Writing Task 1
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Ebook</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-red-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-green-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-yellow-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-purple-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-blue-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-cyan-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-orange-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 border hover:bg-pink-100 gap-y-4 border-slate-200 rounded-2xl">
            <Image src={book1} alt="book" />
            <h3 className="text-base ">
              Cambridge English IELTS 17 - IELTS mock test from cambridge
            </h3>
            <h5 className="text-red-500 ">200,000 VND</h5>
            <p className="mt-auto text-sm">Print book</p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
