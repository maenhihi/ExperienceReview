import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/LOGO.png'
import Link from 'next/link'

function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  // Update the window width when the window is resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Set initial window width after component mounts
    setWindowWidth(window.innerWidth);

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Early return to handle SSR (don't render anything until windowWidth is set)
  if (windowWidth === undefined) {
    return null; // Or a loading spinner, depending on your preference
  }

  // Check if the page size is mobile (adjust the breakpoint as needed)
  const isMobile = windowWidth < 768;
  return (<>
    {/* <Image alt='M.H.' src={Logo} height={100} width={100}></Image> */}
    <div className="navbar bg-white z-50 flex justify-center items-center shadow-2xl">
      <div className="flex-1">
        <Link className="w-10  flex justify-center transition-transform 300ms hover:scale-110  mr-3 text-xl" href='/'>
          <Image alt='M.H.' className='h-full w-full rounded-full' src={Logo} height={100} width={100}></Image>
          {/* MA'EN HIHI */}
        </Link>
        <p className='font-bold hidden md:block cursor-not-allowed'>MA&apos;EN HIHI</p>
      </div>
      {isMobile ?
        (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10">
                <Image
                width={100}
                height={100}
                  alt="M.H"
                  src="https://www.svgrepo.com/show/506800/burger-menu.svg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li><Link href="/#tech-stack">Tech Stack</Link></li>
              <li><Link href="/#about-me">About me</Link></li>
              <li><Link href="/#projects">Projects</Link></li>
            </ul>
          </div>) : (<ul className='flex space-between m-4'>
            <li className='text-  mr-4 ml-4 font-bold blue__hover'>
              <Link href="/">Home</Link>
            </li>
            <li className='text- p-1 mr-4 ml-4 font-bold blue__hover'>
              <Link href="/#tech-stack">Tech Stack</Link>
            </li>
            <li className='text- p-1 mr-4 ml-4 font-bold blue__hover'>
              <Link href="/#about-me">About me</Link>
            </li>
            <li className='text- p-1 mr-4 ml-4 font-bold blue__hover'>
              <Link href="/#projects">Projects</Link>
            </li>



          </ul>
        )
      }

    </div>
  </>
  )
}

export default Navbar
