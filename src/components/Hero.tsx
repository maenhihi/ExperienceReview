import Image from 'next/image'
import React from 'react'
import FacePicture from '@/assets/IMG_1926-removebg.png'
import Link from "next/link"

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gray-200'>
            <div className="h-9/10 flex justify-around items-center flex-col">
                <div className=' w-5/6 flex justify-around items-center'>

                    <div className='w-8/5 md:w-3/5'>
                        <h1 className='sm:text-5xl md:text-9xl font-bold'>Hey
                            <br />
                            <span className='blue'>
                                I&apos;m Ma&apos;en
                            </span>
                        </h1>
                        <h3 className='font-bold'>I&apos;m a <span className='blue'>Frontend Software Engineer</span>  with a passion for creating web apps with great user experiences.
                            <br />You can check me out over <span className='blue'>HERE</span></h3>
                        <br />
                        <div className="flex mt-4">
                            <a href="https://www.linkedin.com/in/ma%E2%80%99en-hihi-75a83a1a0/" target="_blank"
                                className="social__link click flex justify-center items-center text-white p-2 w-8 h-8 mr-3 text-sm rounded-full">
                                <i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/maenhihi" target="_blank"
                                className="social__link click flex justify-center items-center text-white p-2 w-8 h-8 mr-3 text-sm rounded-full">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto: maenhihi@outlook.com" target="_blank"
                                className="social__link click flex justify-center items-center text-white p-2 w-8 h-8 mr-3 text-sm rounded-full">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="/MAEN REVIEW RESUME (1).pdf" target="_blank"
                                className="social__link click flex justify-center items-center text-white p-2 w-8 h-8 mr-3 text-sm rounded-full">
                                <i className="fas fa-file-pdf"></i>
                            </a>
                        </div>            </div>
                    <div className='hidden md:block'>

                        <Image alt='face' height={400} width={400} src={FacePicture} />
                    </div>

                </div>

                <div
                    className={` animate-pulse flex align-bottom `}
                >
            <Link href={'#tech-stack'}>
                    <i className="fa-solid fa-chevron-down blue text-4xl"></i>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Hero