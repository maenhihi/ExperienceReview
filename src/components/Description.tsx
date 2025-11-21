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
                    I&apos;m a young aspiring <span className="blue">Frontend Software Engineer</span> from Australia 🇦🇺🦘 who has a love and passion for creating aesthetic and user-friendly websites.
                    <br />
                    I am currently a <span className="blue">Software Engineering</span> student at the <span className="blue">University Of Technology Of Sydney</span>, who is learning from some of the most highly qualified people within the industry.
                </div>
            </div>
            
        </div>
  
            </>
    )
}

export default Description