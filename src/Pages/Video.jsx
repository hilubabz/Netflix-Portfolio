import { FaGithub, FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { useParams } from "react-router-dom";

const projects = [{
    name: 'SocialSphere',
    language: ['Next.js', 'MongoDB', 'Python'],
    image: 'SocialSphere.png',
    color: '#1b2951',
    description: 'SocialSphere is a social media website that helps user to share posts, like, comment, message friends, etc. It has an offensive comment filtering system implemented using Logistic Regression algorithm with Python and real time messaging with Socket.io',
    github:'https://github.com/hilubabz/SocialSphere'
},
{
    name: 'Messayo',
    language: ['React.js', 'Express.js', 'MongoDB'],
    image: 'Messayo.png',
    color: '#f8f9fa',
    description: 'Messayo is a messaging website developed using MERN stack. It helps users to add other users and then message their friends and also share pictures. It integrates real time messaging feature with the help of Socket.IO',
    github:'https://github.com/hilubabz/Messayo'
},
{
    name: 'HavocAura',
    language: ['React.js', 'Express.js', 'MongoDB'],
    image: 'HavocAura.png',
    color: '#2d1b69',
    description: 'HavocAura is an ecommerce website developed using MERN Stack. It consists of a catalog of laptops and PC Parts. Users can easily add any item to cart and then checkout with secure eSewa payment gateway. Users also have the option to build their own PC with the parts they selected.',
    github:'https://github.com/hilubabz/HAVOCAURA'
},
{
    name: 'Gaidim',
    language: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'Gaidim.png',
    color: '#f9f9f9',
    description: 'Gaidim is a travel planning website developed using HTML, CSS, JS, and PHP. In it, users can login browse various plaves in bucket list, cultural, and top attractions. Moreover, they can also add various places to their favorites and also look for accomodations.',
    github:'https://github.com/hilubabz/Travel-Management'
},
{
    name: 'Furniture Classification',
    language: ['Python'],
    image: 'Python.png',
    color: '#2d1b69',
    description: 'It is a simple console based furniture classification implemented using Python. It makes use of CNN (Convolutional Neural Network) to classify the furnitures. Users can simply provide an image and then it will classified into Almirah, Chair, Fridge, Table, or TV',
    github:'https://github.com/hilubabz/Furniture-Classification'
},
{
    name: 'Rock Paper Scissors',
    language: ['HTML', 'CSS', 'JavaScript'],
    image: 'Rock.png',
    color: '#f9f9f9',
    description: 'A simple rock paper scissors game developed using HTML, CSS, and JavaScript. It simply allows user to play rock paper scissors with computer. It also keeps track and stores the scores (win, draw, loss) with the option to reset the scores.',
    github:'https://github.com/hilubabz/Rock-Paper-Scissors '
},
{
    name: 'To Do List',
    language: ['React.js', 'TypeScript'],
    image: 'ToDoList.png',
    color: '#2d1b69',
    description: 'A simple To-Do List developed using React+TypeScript. Users can simply add tasks and then remove the tasks. The tasks are stored in local storage so the user can access it when they return to the website.',
    github:'https://github.com/hilubabz/To-Do-List-TypeScript'
}]

export default function Video() {

    const {index}=useParams()
    return (
        <div className="">
            <div>
                <video
                    controls
                    muted
                    src="/SOCIALSPHERE1.mp4"
                    className=" h-full w-full object-cover object-top"
                >
                    Your browser does not support video.
                </video>
            </div>

            <div className="min-h-screen bg-black text-white font-sans">
                <div className="relative px-8 py-12 max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-[60%_30%] gap-8 items-center">

                        <div className="flex flex-col space-y-6 relative z-10">
                            <div className="flex space-x-10 items-center">
                                <div className="text-4xl font-bold">{projects[index].name}</div>
                                <a href={`${projects[index].github}`} className="flex gap-2 items-center text-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 px-4 py-2 rounded-xl cursor-pointer" target="_blank">
                                    <FaGithub/>
                                    GitHub
                                </a>    
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm uppercase tracking-widest text-red-500 font-semibold">
                                    Featured Project
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    {projects[index].title}
                                </h1>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                                {projects[index].description}
                            </p>

                            <div className="pt-6 space-y-4">
                                <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                                    Technologies Used
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    {projects[index].language.map((value, ind) => {
                                        return (
                                            <div
                                                key={ind}
                                                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 px-4 py-2 rounded-lg flex gap-2 items-center hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer group"
                                            >
                                                <span className="text-red-500 text-lg group-hover:scale-110 transition-transform">
                                                    {value === 'React.js' && (<FaReact />)}
                                                    {value === 'Python' && (<FaPython />)}
                                                    {value === 'HTML' && (<FaHtml5 />)}
                                                    {value === 'CSS' && (<FaCss3Alt />)}
                                                    {value === 'Next.js' && (<RiNextjsFill />)}
                                                    {value === 'MongoDB' && (<DiMongodb />)}
                                                    {value === 'JavaScript' && (<FaJs />)}
                                                    {value === 'PHP' && (<FaPhp />)}
                                                    {value === 'Express.js' && (<SiExpress />)}
                                                    {value === 'MySQL' && (<SiMysql />)}
                                                    {value === 'TypeScript' && (<SiTypescript />)}
                                                </span>
                                                <span className="text-sm font-medium text-gray-300">{value}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                                <img
                                    src={'/'+projects[index].image}
                                    alt="Project showcase"
                                    className="w-full h-[250px] object-contain transform group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundColor: projects[index].color }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}