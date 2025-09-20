import { IoPlaySharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Projects from "../Components/Projects";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [pdf,setPdf]=useState(false)
    return (
        <>
            <div className="w-full h-full md:h-[500px] relative">
                <img
                    src="/Utsarga.jpg"
                    className="h-full w-full object-cover object-top"
                />
                <div className="absolute left-7 top-1/3 space-y-5">
                    <div className="text-[14px] md:text-4xl font-bold flex space-x-2 items-center">
                        <div>UTSARGA MANANDHAR</div>
                        <div className="bg-red-700 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-red-800 shadow-md hover:shadow-red-500 ease-in-out duration-[0.4s] text-sm px-2 py-1 md:hidden" onClick={()=>setPdf(true)}>
                            <IoPlaySharp />
                            Resume
                        </div>
                        <a href="https://github.com/hilubabz" className="bg-black text-sm rounded-2xl flex items-center gap-2 cursor-pointer shadow-md hover:shadow-white ease-in-out duration-[0.4s] px-2 py-1 md:hidden" target="_blank">
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                    <div className="md:w-1/2 pr-2 text-justify md:text-lg text-[10px]">
                        Hi, I’m Utsarga Manandhar. I’m a passionate web developer
                        specializing in MERN stack and Next.js, dedicated to building
                        modern, responsive, and user-friendly web applications. I enjoy
                        turning complex problems into clean and efficient solutions, and I
                        thrive on creating projects that combine functionality with great
                        design. Continuously learning and exploring new technologies, I aim
                        to deliver web experiences that are not only visually appealing but
                        also perform seamlessly across devices.
                    </div>
                    <div className="flex space-x-7">
                        <div className="bg-red-700 px-7 py-2 rounded-2xl hidden md:flex items-center gap-2 cursor-pointer hover:bg-red-800 shadow-md hover:shadow-red-500 ease-in-out duration-[0.4s]" onClick={()=>setPdf(true)}>
                            <IoPlaySharp />
                            Resume
                        </div>
                        <a href="https://www.github.com/hilubabz" className="bg-black px-7 py-2 rounded-2xl hidden md:flex items-center gap-2 cursor-pointer shadow-md hover:shadow-white ease-in-out duration-[0.4s]" target="_blank">
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>
                {pdf&&createPortal(
                    <div className="fixed top-0 h-full w-full bg-black/20 z-40 flex items-center justify-center">
                        <div className="fixed top-10 right-10 z-50 h-10 w-10 rounded-full bg-black/50 flex justify-center items-center cursor-pointer" onClick={()=>setPdf(false)}>X</div>
                        <iframe src="/CV.pdf" title="My Resume" className="h-[90%] w-[75%]"/>
                    </div>,
                    document.body
                )}
            </div>
            <Projects/>
        </>
    );
}
