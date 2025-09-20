
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { useState, useEffect } from 'react'
import ProjectPage from './Pages/ProjectPage'
import Video from './Pages/Video'
import Skills from './Pages/Skills'
import ProfessionalPage from './Pages/ProfessionalPage'


function App() {
  const [top, setTop] = useState(true)
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
      <nav className={`flex justify-between items-center px-7 py-4 fixed w-full top-0 z-50 ${top ? '' : 'bg-black'} ease-in-out duration-[0.5s]`}>
        <div className='flex gap-x-30'>
          <Link to={'/'} className='h-7 w-auto '>
            <img src="/Logo.png" alt="" className='h-full w-full object-cover' />
          </Link>
          <div className='flex space-x-10'>
            <Link to={'/'} className='hover:text-red-700 cursor-pointer ease-in-out duration-[0.5s]'>Home</Link>
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
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/professional' element={<ProfessionalPage/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
