import { IoPlaySharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Projects from "../Components/Projects";


export default function HomePage() {
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
                        <div className="bg-red-700 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-red-800 shadow-md hover:shadow-red-500 ease-in-out duration-[0.4s] text-sm px-2 py-1 md:hidden">
                            <IoPlaySharp />
                            Resume
                        </div>
                        <div className="bg-black text-sm rounded-2xl flex items-center gap-2 cursor-pointer shadow-md hover:shadow-white ease-in-out duration-[0.4s] px-2 py-1 md:hidden">
                            <FaGithub />
                            GitHub
                        </div>
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
                        <div className="bg-red-700 px-7 py-2 rounded-2xl hidden md:flex items-center gap-2 cursor-pointer hover:bg-red-800 shadow-md hover:shadow-red-500 ease-in-out duration-[0.4s]">
                            <IoPlaySharp />
                            Resume
                        </div>
                        <div className="bg-black px-7 py-2 rounded-2xl hidden md:flex items-center gap-2 cursor-pointer shadow-md hover:shadow-white ease-in-out duration-[0.4s]">
                            <FaGithub />
                            GitHub
                        </div>
                    </div>
                </div>

            </div>
            <Projects/>
        </>
    );
}
