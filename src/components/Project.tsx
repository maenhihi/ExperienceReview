import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectProps {
  id: number;
  title: string;
  logo: string;
}

const Project: React.FC<ProjectProps> = ({ id, title, logo }) => {  
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Link href={`${id}`}>
      <div
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)} 
        className="relative w-44 h-44 md:w-64 md:h-64 m-4 cursor-pointer rounded-lg overflow-hidden"
      >
        <Image 
          src={logo} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${mouseOver ? 'opacity-50' : 'opacity-0'}`}
        ></div>

        {/* Title Text */}
        <h3
          className={`absolute z-10 text-white font-bold text-center w-full h-full flex justify-center items-center transition-opacity duration-300 ${mouseOver ? 'opacity-100' : 'opacity-0'}`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default Project;
