
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { useState, useEffect } from 'react'
import ProjectPage from './Pages/ProjectPage'
import Video from './Pages/Video'
import Skills from './Pages/Skills'
import ProfessionalPage from './Pages/ProfessionalPage'
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";

function App() {
  const [top, setTop] = useState(true)
  const [nav, setNav] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`flex justify-between items-center px-7 md:py-4 py-2 fixed w-full top-0 z-30 ${top ? '' : 'bg-black'} ease-in-out duration-[0.5s]`}>
        <div className='flex gap-x-2 md:gap-x-30'>
          {nav ? (
            <ImCross
              className="md:hidden z-21 text-3xl transition-opacity duration-300 opacity-100"
              onClick={() => setNav(false)}
            />
          ) : (
            <VscThreeBars
              className="md:hidden z-21 text-3xl transition-opacity duration-300 opacity-100"
              onClick={() => setNav(true)}
            />
          )}
          <Link to={'/'} className='h-7 w-auto z-50'>
            <img src="/Logo.png" alt="" className='h-full w-full object-cover' />
          </Link>
          <div className='md:flex hidden space-x-10'>
            <Link to={'/'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Home</Link>
            <Link to={'/professional'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Professional</Link>
            <Link to={'/skills'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Skills</Link>
            <Link to={'/projects'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Projects</Link>
            <div className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Videos</div>
          </div>

          
          <div className={`fixed top-0 left-0 z-20 md:hidden flex flex-col space-y-10 bg-black/70 h-[100vh] w-[50vw] pt-15 pl-10 ${nav ? '' : 'translate-x-[-50vw]'} duration-500 ease-in-out`}>
            <Link to={'/'} className='hover:text-red-700 pt-10 cursor-pointer ease-in-out duration-[0.5s]'>Home</Link>
            <Link to={'/professional'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Professional</Link>
            <Link to={'/skills'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Skills</Link>
            <Link to={'/projects'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Projects</Link>
            <div className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Videos</div>
          </div>
        </div>
        <div className='h-10 w-10 bg-white rounded-full'></div>
      </nav>




      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/video' element={<Video />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/professional' element={<ProfessionalPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
