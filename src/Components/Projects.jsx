import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";
import TextType from "./TextType";

export default function Projects() {
    // const projects = [
    //     "SocialSphere",
    //     "Messayo",
    //     "HavocAura",
    //     "Gaidim",
    //     "Furniture Classification",
    //     "Rock Paper Scissors",
    //     "To Do List",
    // ];
    const projects = [{
        name: 'SocialSphere',
        language: 'Next.js | MongoDB | Python (Fast API)',
        image: 'SocialSphere.png',
        color: '#1b2951',
        description: 'SocialSphere is a social media website that helps user to share posts, like, comment, message friends, etc. It has an offensive comment filtering system implemented using Logistic Regression algorithm with Python and real time messaging with Socket.io'
    },
    {
        name: 'Messayo',
        language: 'React.js | Express.js | MongoDB',
        image: 'Messayo.png',
        color: '#f8f9fa',
        description: 'Messayo is a messaging website developed using MERN stack. It helps users to add other users and then message their friends and also share pictures. It integrates real time messaging feature with the help of Socket.IO'
    },
    {
        name: 'HavocAura',
        language: 'React.js | Express.js | MongoDB',
        image: 'HavocAura.png',
        color: '#2d1b69',
        description: 'HavocAura is an ecommerce website developed using MERN Stack. It consists of a catalog of laptops and PC Parts. Users can easily add any item to cart and then checkout with secure eSewa payment gateway. Users also have the option to build their own PC with the parts they selected.'
    },
    {
        name: 'Gaidim',
        language: 'HTML | CSS | JavaScript | PHP | MySQL',
        image: 'Gaidim.png',
        color: '#f9f9f9',
        description: 'SocialSphere is a social media website that helps user to share posts, like, comment, message friends, etc. It has an offensive comment filtering system implemented using Logistic Regression algorithm with Python and real time messaging with Socket.io'
    },
    {
        name: 'Furniture Classification',
        language: 'Python',
        image: 'Python.png',
        color: '#2d1b69',
        description: 'It is a simple console based furniture classification implemented using Python. It makes use of CNN (Convolutional Neural Network) to classify the furnitures. Users can simply provide an image and then it will classified into Almirah, Chair, Fridge, Table, or TV'
    },
    {
        name: 'Rock Paper Scissors',
        language: 'HTML | CSS | JavaScript',
        image: 'Rock.png',
        color: '#f9f9f9',
        description: 'A simple rock paper scissors game developed using HTML, CSS, and JavaScript. It simply allows user to play rock paper scissors with computer. It also keeps track and stores the scores (win, draw, loss) with the option to reset the scores.'
    },
    {
        name: 'To Do List',
        language: 'React.js',
        image: 'ToDoList.png',
        color: '#2d1b69',
        description: 'A simple To-Do List developed using React.js. Users can simply add tasks and then remove the tasks. The tasks are stored in local storage so the user can access it when they return to the website.'
    }]
    const [projectSlider, setProjectSlider] = useState(0);
    const [projectButton, setProjectButton] = useState(false);
    const [scale, setScale] = useState(-1);
    const [select, setSelect] = useState(-1);
    const [invert, setInvert] = useState(-1)

    const handleDescription = (index) => {
        if (invert != -1) {
            setSelect(-1)
            setInvert(-1)
        }
        else {
            setSelect(index)
            setInvert(index)
        }
    }
    return (
        <div className="pt-10 ">
            <div className="text-2xl px-7">Todays Top Picks (Recent Projects)</div>
            <div
                className="relative px-7 pt-7 flex items-center"
                onMouseOver={() => setProjectButton(true)}
                onMouseLeave={() => setProjectButton(false)}
            >
                <div
                    className={`flex gap-7 h-[150px] ease-in-out duration-[1s]`}
                    style={{ transform: `translateX(${projectSlider * 328}px)` }}
                >
                    {projects.map((val, index) => (
                        <div>
                            <div
                                key={index}
                                className={`flex-shrink-0 relative ease-in-out duration-[0.5s] min-h-[150px] w-[300px] hover:z-20 shadow-md bg-[#1A1A1A] flex flex-col space-y-3`}
                                onMouseOver={() => setScale(index)}
                                onMouseLeave={() => setScale(-1)}
                                style={{
                                    transform: `${scale === index ? "scale(1.4)" : "scale(1)"} 
                            ${scale === 0 ? "translateX(50px)" : ""}`,
                                }}
                            >
                                {scale == index && (
                                    <div className="absolute bottom-[-15px] bg-red-700 h-[1px] rounded-4xl ease-in-out duration-[0.5s] animate-border">

                                    </div>
                                )}
                                <img
                                    src={`/${val.image}`}
                                    alt={val.name}
                                    className="w-full h-[150px] object-contain"
                                    style={{backgroundColor:val.color}}
                                />
                                {scale == index && (

                                    <div className="space-y-2">

                                        <div className="flex justify-between px-2">
                                            <div className="bg-white text-black h-7 w-7 flex items-center justify-center rounded-full pl-1">
                                                <IoPlaySharp />
                                            </div>
                                            <div className={`flex items-center justify-center h-7 w-7 rounded-full border-white border-1 ${invert == index ? 'rotate-180' : ''} transition-all`} onClick={() => handleDescription(index)}>
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                        <div className="text-md px-2 text-red-700">{val.name}</div>
                                        {select == index && (
                                            <div className="px-2">
                                                <TextType text={val.description}
                                                    typingSpeed={75}
                                                    pauseDuration={1500}
                                                    showCursor={true}
                                                    cursorCharacter="|" />
                                            </div>)}
                                        <div className="px-2 mb-10 text-sm text-gray-400">
                                            <div>{val.language}</div>
                                        </div>
                                    </div>)}
                            </div>
                            <div className="text-center pt-2">{val.name}</div>
                        </div>
                    ))}
                </div>
                <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full bg-red-700 h-full flex items-center w-0 justify-center hover:opacity-100 ease-in-out duration-[0.4s] ${projectButton ? "opacity-50 w-20" : "opacity-0"
                        }`}
                    onClick={() =>
                        setProjectSlider(projectSlider == 0 ? -3 : projectSlider + 1)
                    }
                >
                    <MdArrowBackIos />
                </div>
                <div
                    className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-l-full bg-red-700 h-full flex items-center w-0 justify-center hover:opacity-80 ease-in-out duration-[0.5s] ${projectButton ? "opacity-50 w-20" : "opacity-0"
                        }`}
                    onClick={() =>
                        setProjectSlider(projectSlider == -3 ? 0 : projectSlider - 1)
                    }
                >
                    <MdArrowForwardIos />
                </div>
            </div>
            <div className="flex justify-center align-center pt-10 space-x-4">
                <div className={`h-2 w-2 border-1 border-red-700 rounded-full ${projectSlider == 0 ? 'bg-red-700' : ''} transition`}></div>
                <div className={`h-2 w-2 border-1 border-red-700 rounded-full ${projectSlider == -1 ? 'bg-red-700' : ''} transition`}></div>
                <div className={`h-2 w-2 border-1 border-red-700 rounded-full ${projectSlider == -2 ? 'bg-red-700' : ''} transition`}></div>
                <div className={`h-2 w-2 border-1 border-red-700 rounded-full ${projectSlider == -3 ? 'bg-red-700' : ''} transition`}></div>
            </div>
        </div>
    )
}