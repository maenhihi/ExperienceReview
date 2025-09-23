import React from 'react'
import Image from 'next/image'
import FacePicture from "../assets/IMG_5329.png"


function Description() {
    return (
        <>
        <div
        id='about-me'
        className='flex justify-center items-center p-10 bg-gray-200'>
            <div className='md:h-[50vh] md:w-5/6 md:flex justify-center items-center p-3 md:p-8 text-center bold'>
                <figure className='flex w-full mb-4'>
                    <div className='flex justify-end items-end absolute mt-48'>
                        <span className="waving-hand hidden md:block text-5xl md:text-8xl relative">👋</span>
                    </div>
                    <Image alt='face' height={600} width={600} src={FacePicture} />
                </figure>
                <div className="w- font-bold mt-8">
                    <h1 className='text-3xl md:text-4xl blue mt-16 md:mt-0'>Here&apos;s a bit about me!</h1>
As a fourth-year Software Engineering student, my greatest passion is
applying my technical expertise in Frontend Web Engineering. With a strong
foundation in programming languages like HTML, CSS/Tailwind,
JavaScript/TypeScript, and React/Next.js, I am confident in my ability to
contribute effectively to any web development team.           <br />         <br />Growing up in the realm of technology, I was always intrigued to figure out
the technicalities of how web applications work. This stimulated me with the
yearning to provide greater user engagement, better accessibility for people
of special needs, and driving innovation through the skill of web
development.<br/> <br />I have worked on various projects that demonstrate my skills, as well as
being currently engaged in ongoing personal projects. In conjunction, I was
also a part of a startup companies project in which it aims to assist High
School teachers and students save time, stay organised, and personalise
the learning experience. <br/>
                    I am currently a <span className="blue">Software Engineering</span> student at the <span className="blue">University Of Technology Of Sydney</span>, who is learning from some of the most highly qualified people within the industry.
               <br /><br /> </div>
            </div>
            
        </div>
         <div id="tech-stack" className="w-full py-8 flex justify-center items-center blue__background--l ">
  <div className="w-4/5 flex justify-around sm:grid-cols-3 gap-6 px-4">
    
   
    <a href="/MAEN REVIEW RESUME (1).pdf" target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-3">📄</div>
        <span className="text-lg font-semibold text-gray-800">Resume</span>
        <p className="text-sm text-gray-500 mt-1">View PDF</p>
      </div>
    </a>

    <a href="/cover letter.pdf" target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-3">📝</div>
        <span className="text-lg font-semibold text-gray-800">Cover Letter</span>
        <p className="text-sm text-gray-500 mt-1">View PDF</p>
      </div>
    </a>

    <a href="/Maen review reflection.pdf" target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-3">🔍</div>
        <span className="text-lg font-semibold text-gray-800">Reflection</span>
        <p className="text-sm text-gray-500 mt-1">View PDF</p>
      </div>
    </a>

   </div>

  </div>

            </>
    )
}

export default Description