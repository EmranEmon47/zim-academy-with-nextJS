// components/FAQSection.js
import Image from 'next/image'
import { useState } from 'react';
import FAQ from '../../../Assets/Image//faq.jpg';

const questions = [
  {
    question: 'The development history of Zim English?',
    answer:
      'ZIM is a system of high-quality English centers with a personalized learning model, a prestigious learning policy that protects the maximum interests of students, a system of main study programs and study support programs. knowledge-based method. The Contextualized Learning teaching method helps students absorb new knowledge easily, remember it for a long time and apply it effectively.ZIM was established in June 2015, by April 2023 ZIM had 15 branches in Hanoi, Ho Chi Minh City and Da Nang City. In the 7-year journey of operation, ZIM has accompanied many young Vietnamese and international generations on the journey to conquer the IELTS and TOEIC English certification exams, students are equipped with foreign language knowledge foundations. Certainly, rich vocabulary helps you confidently live and operate in an international academic environment.',
  },
  {
    question: 'IELTS course in ZIM English and tuition frees for IELTS courses?',
    answer:
    'ZIM is a system of high-quality English centers with a personalized learning model, a prestigious learning policy that protects the maximum interests of students, a system of main study programs and study support programs. knowledge-based method. The Contextualized Learning teaching method helps students absorb new knowledge easily, remember it for a long time and apply it effectively.ZIM was established in June 2015, by April 2023 ZIM had 15 branches in Hanoi, Ho Chi Minh City and Da Nang City. In the 7-year journey of operation, ZIM has accompanied many young Vietnamese and international generations on the journey to conquer the IELTS and TOEIC English certification exams, students are equipped with foreign language knowledge foundations. Certainly, rich vocabulary helps you confidently live and operate in an international academic environment.',
  },
  {
    question: 'The route of Communicative English at ZIM English and course fees?',
    answer:
    'ZIM is a system of high-quality English centers with a personalized learning model, a prestigious learning policy that protects the maximum interests of students, a system of main study programs and study support programs. knowledge-based method. The Contextualized Learning teaching method helps students absorb new knowledge easily, remember it for a long time and apply it effectively.ZIM was established in June 2015, by April 2023 ZIM had 15 branches in Hanoi, Ho Chi Minh City and Da Nang City. In the 7-year journey of operation, ZIM has accompanied many young Vietnamese and international generations on the journey to conquer the IELTS and TOEIC English certification exams, students are equipped with foreign language knowledge foundations. Certainly, rich vocabulary helps you confidently live and operate in an international academic environment.',
  },
  {
    question: 'IELTS course in ZIM English and tuition frees for IELTS courses?',
    answer:
    'ZIM is a system of high-quality English centers with a personalized learning model, a prestigious learning policy that protects the maximum interests of students, a system of main study programs and study support programs. knowledge-based method. The Contextualized Learning teaching method helps students absorb new knowledge easily, remember it for a long time and apply it effectively.ZIM was established in June 2015, by April 2023 ZIM had 15 branches in Hanoi, Ho Chi Minh City and Da Nang City. In the 7-year journey of operation, ZIM has accompanied many young Vietnamese and international generations on the journey to conquer the IELTS and TOEIC English certification exams, students are equipped with foreign language knowledge foundations. Certainly, rich vocabulary helps you confidently live and operate in an international academic environment.',
  },
  {
    question: 'TOEIC course in ZIM English and tuition frees for IELTS courses?',
    answer:
      'To create a collapse component, you can use the `transition` and `max-h` classes provided by Tailwind CSS. Here is an example: ',
  },
  {
    question: 'IELTS, TOEIC mock test at ZIM English?',
    answer:
      'To create a collapse component, you can use the `transition` and `max-h` classes provided by Tailwind CSS. Here is an example: ',
  },
  {
    question: 'Learning experience at ZIM English?',
    answer:
    'ZIM is a system of high-quality English centers with a personalized learning model, a prestigious learning policy that protects the maximum interests of students, a system of main study programs and study support programs. knowledge-based method. The Contextualized Learning teaching method helps students absorb new knowledge easily, remember it for a long time and apply it effectively.ZIM was established in June 2015, by April 2023 ZIM had 15 branches in Hanoi, Ho Chi Minh City and Da Nang City. In the 7-year journey of operation, ZIM has accompanied many young Vietnamese and international generations on the journey to conquer the IELTS and TOEIC English certification exams, students are equipped with foreign language knowledge foundations. Certainly, rich vocabulary helps you confidently live and operate in an international academic environment.',
  },
]

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index)
  }

  return (
    <div className="container relative w-full min-h-screen mx-auto my-12 overflow-hidden -top-20">
      <div className='flex flex-col items-center justify-center py-8 mx-auto'>
        <Image src={FAQ} className='w-64' alt="faq"  />
      <h2 className="pt-12 pb-4 text-2xl font-bold">Frequently Asked Questions</h2>
      <p className='text-lg font-medium'>Learn quickly about ZIM and the quality products at ZIM</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index}>
            <button
              className="flex justify-between w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
              onClick={() => handleQuestionClick(index)}
            >
              <span className="font-bold">{q.question}</span>
              <span>{activeQuestion === index ? '-' : '+'}</span>
            </button>
            {activeQuestion === index && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection
