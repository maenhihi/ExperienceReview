import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Index() {
  const Router = useRouter();
  const pageId = Router.query.projects; // pageId is a string by default

  if (!pageId) {
    console.log("pageId is not available yet.");
    return null; // Render nothing or a loading state
  }

  const numericPageId = Number(pageId);

  if (isNaN(numericPageId)) {
    console.log("numericPageId is NaN, check the value of pageId:", pageId);
    return null; // or render an error message or loading state
  }

  type Project = {
    title: string;
    tools: string[];
    link: string;
    project_overview: string;
  };

  const projectData: Record<number, Project> = {
    1: {
      "title": "Edflow.ai",
      "tools": ["Tailwind", "Next.JS", "TypeScript"],
      "link": "https://edflow.ai",
      "project_overview": "​During my three-month internship at edflow.ai as a frontend developer, I had the opportunity to contribute to the development of user interfaces for their educational platform. This experience allowed me to apply my knowledge of Next.JS in a real-world setting, enhancing my technical skills and understanding of responsive design principles. Collaborating with a team of developers and designers, I gained valuable insights into the software development lifecycle and the importance of effective communication in a professional environment. This internship not only solidified my passion for frontend development but also provided me with practical experience that will be instrumental in my future career."
    },

    2: {
      "title": "ASEI Map Prototype",
      "tools": ["React.JS", "Leaflet", "Google Analytics"],
      "link": "https://main.d2xrk23bufg8q8.amplifyapp.com/",
      "project_overview": "During my university studies in Software Engineering, I worked as a Frontend Developer on a real-world mapping platform project under ASEI (Africa Sustainable Engineering Initiative). Collaborating with clients based in Uganda, our team built interactive and responsive map-based interfaces using ReactJS and Leaflet, this paved the way for future developers to know how to build on this prototype. This experience not only sharpened my frontend development skills but also gave me valuable exposure to working with international stakeholders and delivering tech solutions with real-world impact."
    },
    3: {
      "title": "World Cup App",
      "tools": ["JavaScript", "React", "Node.js"],
      "link": "https://fifa-daisy-ui.vercel.app/",
      "project_overview": "I developed a World Cup web application using Next.js and the 'daisyui' framework, integrating a mock API to simulate real-time data. The application features detailed team descriptions, live scores, and a dynamic ladder board, offering users a comprehensive view of the tournament. This project underscores my proficiency in frontend development, emphasizing efficient data handling and intuitive user interface design."
    },
    4: {
      "title": "Online Library Mockup",
      "tools": ["HTML", "CSS", "JavaScript"],
      "link": "https://main.da7wrlmwjnbmw.amplifyapp.com/",
      "project_overview": "For this project, I developed an online library platform using HTML, CSS, and JavaScript. The goal was to create a user-friendly web application where users can browse, and search a collection of books. I used HTML to structure the content, CSS for styling and layout, and JavaScript to add interactivity and dynamic functionality such as sorting books, and updating the library in real time. The platform includes features like a responsive design for different screen sizes. This project helped me strengthen my front-end development skills and better understand how to build aesthetically pleasing web apps from scratch."
    },

  }
  if (numericPageId === null) {
    return <p>Loading...</p>; // or null, spinner, whatever
  }

  const project = projectData[numericPageId];

  console.log(project)


  return (
    <>
      <div className='flex flex-col items-center w-screen bg-white pt-8'>
        {/* <div className='w-full h-screen flex-col bg-white flex '> */}
        <div className='w-screen bg-white  flex justify-center items-center'><h1 className='text-3xl md:text-5xl font-bold blue' >{project.title}</h1>
          {/* <p>This page contains the case study of Edflow.ai Project which includes the Project Overview, Tools Used and Links to the official product.</p> */}
        </div>
        {/* </div> */}
        <div className=" w-full flex justify-center items-center bg-white pl-6 pr-6">
          <div className="p-4 w-full h-full flex md:flex-row flex-col  items-center">

            <div className="w-11/12 md:w-2/3">
              <div className="carousel ">
                <div id="item1" className="carousel-item w-full flex justify-center items-center">
                  <Image src={`/projectsImages/${project.title}/ss1.png`} height={100} width={600} alt={''} />
                </div>
                <div id="item2" className="carousel-item w-full flex justify-center items-center">
                  <Image src={`/projectsImages/${project.title}/ss2.png`} height={100} width={600} alt={''} />
                </div>
                <div id="item3" className="carousel-item w-full flex justify-center items-center">
                  <Image src={`/projectsImages/${project.title}/ss3.png`} height={100} width={600} alt={''} />
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                <Link href="#item1" className="btn btn-xs">1</Link>
                <Link href="#item2" className="btn btn-xs">2</Link>
                <Link href="#item3" className="btn btn-xs">3</Link>

              </div>
            </div>
            <div className='md:w-1/3 p-4 md:p-0 w-screen justify-start'>
              <h2 className='blue text-xl md:text-3xl font-bold'>Tools used</h2>
              <ul className='flex space-x-4'>
                {
                  project.tools.map((tool, index) => <li key={index} className='p-2 border cursor-default rounded-md bg-gray-200 font-bold text-gray-600'>{tool}</li>
                  )
                }
                {/* <li className='p-2 border cursor-default rounded-md bg-gray-200 font-bold text-gray-600'>Tailwind</li>
                <li className='p-2 border cursor-default rounded-md bg-gray-200 font-bold text-gray-600'>Next.JS</li>
                <li className='p-2 border cursor-default rounded-md bg-gray-200 font-bold text-gray-600'>TypeScript</li> */}
              </ul>

              <h2 className='blue mt-8 text-xl md:text-3xl font-bold'>See live</h2>
              <ul className='space-x-4'>
                <Link href={project.link} target='_blank'>
                  <li className="btn  blue__background text-sm text-white">LIVE LINK</li>
                </Link>
                <Link href='/'>
                  <li className="btn blue__border text-sm bg-white">GO BACK</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center bg-gray-200 pt-8 items-center h-1/2">
          <div className="h-1/2 w-4/5 md:w-1/2 ">
            <h3 className='blue font-bold'>Project Overview</h3>
            <p>
              {project.project_overview}
            </p>          </div>

        </div>
      </div>

    </>
  )
}
