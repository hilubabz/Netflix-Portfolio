import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { useState, useEffect} from "react";
const projects = [{
        name: 'SocialSphere',
        language: ['Next.js', 'MongoDB', 'Python'],
        image: 'SocialSphere.png',
        color: '#1b2951',
        description: 'SocialSphere is a social media website that helps user to share posts, like, comment, message friends, etc. It has an offensive comment filtering system implemented using Logistic Regression algorithm with Python and real time messaging with Socket.io'
    },
    {
        name: 'Messayo',
        language: ['React.js', 'Express.js', 'MongoDB'],
        image: 'Messayo.png',
        color: '#f8f9fa',
        description: 'Messayo is a messaging website developed using MERN stack. It helps users to add other users and then message their friends and also share pictures. It integrates real time messaging feature with the help of Socket.IO'
    },
    {
        name: 'HavocAura',
        language: ['React.js', 'Express.js', 'MongoDB'],
        image: 'HavocAura.png',
        color: '#2d1b69',
        description: 'HavocAura is an ecommerce website developed using MERN Stack. It consists of a catalog of laptops and PC Parts. Users can easily add any item to cart and then checkout with secure eSewa payment gateway. Users also have the option to build their own PC with the parts they selected.'
    },
    {
        name: 'Gaidim',
        language: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        image: 'Gaidim.png',
        color: '#f9f9f9',
        description: 'SocialSphere is a social media website that helps user to share posts, like, comment, message friends, etc. It has an offensive comment filtering system implemented using Logistic Regression algorithm with Python and real time messaging with Socket.io'
    },
    {
        name: 'Furniture Classification',
        language: ['Python'],
        image: 'Python.png',
        color: '#2d1b69',
        description: 'It is a simple console based furniture classification implemented using Python. It makes use of CNN (Convolutional Neural Network) to classify the furnitures. Users can simply provide an image and then it will classified into Almirah, Chair, Fridge, Table, or TV'
    },
    {
        name: 'Rock Paper Scissors',
        language: ['HTML', 'CSS', 'JavaScript'],
        image: 'Rock.png',
        color: '#f9f9f9',
        description: 'A simple rock paper scissors game developed using HTML, CSS, and JavaScript. It simply allows user to play rock paper scissors with computer. It also keeps track and stores the scores (win, draw, loss) with the option to reset the scores.'
    },
    {
        name: 'To Do List',
        language: ['React.js'],
        image: 'ToDoList.png',
        color: '#2d1b69',
        description: 'A simple To-Do List developed using React.js. Users can simply add tasks and then remove the tasks. The tasks are stored in local storage so the user can access it when they return to the website.'
    }]
export default function ProjectPage() {
    const[hover,setHover]=useState(-1)
    const[visible,setVisible]=useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)
        setTimeout(()=>setVisible(true),100)
    },[])
    return (
        <div className="mt-25 px-7 flex gap-5 flex-wrap">
            {projects.map((val, index) =>
                <div key={index} className={`h-[420px] w-[310px] bg-[#1A1A1A] rounded-xl space-y-3 relative ease-in-out duration-[1s] opacity-0 ${visible?'opacity-100 translate-y-[-40px]':''}`} style={{transitionDelay:`${index*100}ms`}} onMouseOver={()=>setHover(index)} onMouseLeave={()=>setHover(-1)}>
                    <img src={`/${val.image}`} alt="" className={`w-full h-[50%] object-contain rounded-t-xl`} style={{ backgroundColor: val.color }} />
                    {hover==index&&(<div className="absolute top-1/2 h-[2px] z-20 bg-red-700 animate-border"></div>)}
                    <div className="px-4 text-lg text-red-700 font-bold">{val.name}</div>
                    <div className=" px-4 line-clamp-3 text-justify text-sm">{val.description}</div>
                    <div className="flex pl-4 text-sm gap-2 flex-wrap">
                        {val.language.map((value, ind) => {
                            return (
                                <div key={ind} className="border-1 px-3 py-1 rounded-2xl flex gap-2 justify-center items-center">
                                    {value=='React.js'&&(<FaReact/>)}
                                    {value=='Python'&&(<FaPython/>)}
                                    {value=='HTML'&&(<FaHtml5/>)}
                                    {value=='CSS'&&(<FaCss3Alt/>)}
                                    {value=='Next.js'&&(<RiNextjsFill/>)}
                                    {value=='MongoDB'&&(<DiMongodb/>)}
                                    {value=='JavaScript'&&(<FaJs/>)}
                                    {value=='PHP'&&(<FaPhp/>)}
                                    {value=='Express.js'&&(<SiExpress/>)}
                                    {value=='MySQL'&&(<SiMysql/>)}
                                    {value}
                                </div>
                            )
                        })}
                    </div>
                </div>

            )}
        </div>
    )
}