import React from 'react'
import Image from 'next/image'

function TechStack() {
    return (
        <>
            <div id='tech-stack' className="tech-stack flex justify-around items-center w-screen blue__background--l bg-opacity-10 h-28">

                <figure className='p-4 relative flex flex-col items-center modal__language'>
                    <Image className='modal__language--img h-full' src={"https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"} alt='JavaScript Logo' height={60} width={60} />
                    <span className="language__name absolute -bottom-2 font-bold scale-0 text-black">JavaScript</span>
                </figure>
                <figure className='p-4 relative flex flex-col items-center modal__language'>
                    <Image className='modal__language--img' src={"https://cdn.iconscout.com/icon/free/png-512/free-typescript-icon-svg-download-png-2945272.png?f=webp&w=512"} alt='TypeScript Logo' height={60} width={60} />
                    <span className="language__name absolute -bottom-2 scale-0 font-bold  text-black">TypeScript</span>
                </figure>
                <figure className='p-4 relative flex flex-col items-center modal__language'>
                    <Image className='modal__language--img' src={"https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"} alt='React.JS Logo' height={60} width={60} />
                    <span className="language__name absolute -bottom-2 scale-0 font-bold  text-black">React</span>
                </figure>
                <figure className='p-4 relative flex flex-col items-center modal__language'>
                    <Image className='modal__language--img' src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"} alt='NEXT.JS Logo' height={60} width={60} />
                    <span className="language__name absolute -bottom-2 scale-0 font-bold  text-black">NEXT.JS</span>
                </figure>
            </div>
           
        </>
    )
}

export default TechStack