import React from 'react'
import Project from './Project'
// import {lol} from ""

const Projects = () => {

  interface ProjectType {
    id: number;
    title: string;
    logo: string;
  }

  const projectList: ProjectType[] = [
    { id: 1, title: "Edflow.ai", logo: "/project-logos/edFlowAiLogo.jpeg" },
    { id: 2, title: "Fort Portal Mapping Platform", logo: "/project-logos/fortPortalMapLogo.png" },
    { id: 3, title: "FIFA World Cup App", logo: "/project-logos/worldCupAppLogo.png" },
    { id: 4, title: "Online Library", logo: "/project-logos/OnlineLibrary.png" },

  ];


  return (
    <div
      id='projects'
      className=' bg-gray-200'>
      <div className="flex justify-center items-center flex-col pt-16 md:pt-0">
      <h1 className='text-3xl md:text-4xl font-bold mt-16 md:mt-0 pt-4 pl-2 pr-2'>These are some of my <span className='blue'>projects</span>.
        </h1>
        <p className='font-bold blue p-2'>These are a few past projects that I&apos;ve worked on.</p>
      </div>
      <div className="w-screen h-1/2 flex justify-center items-center">
        <div className="w-5/6 flex justify-center flex-wrap">
          {
            projectList.map(item => (
              <Project id={item.id} key={item.id} title={item.title} logo={item.logo} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Projects