import { MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import SlideAnimate from "../Components/SlideAnimate";
import PopUpAnimate from "../Components/PopUpAnimate";

export default function ProfessionalPage() {
    const professional = [
        {
            institute: 'Global Square IT Company',
            position: 'Frontend Intern',
            sector: 'React',
            description: 'Working on modern web applications using React.js and related technologies, focusing on building responsive and interactive user interfaces.',
            date: 'Sept 2025 - Present',
            type: 'work',
            active: true
        },
        {
            institute: 'National College of Computer Studies (Tribhuvan University)',
            position: 'Bachelors',
            sector: 'Bachelors in Computer Science & Information Technology',
            description: 'Pursuing advanced studies in Computer Science with focus on software development, algorithms, and modern web technologies.',
            date: 'April 2021 - Present',
            type: 'education',
            active: true
        },
        {
            institute: '+2 (High Level Education)',
            position: 'Science',
            sector: 'Higher Secondary Education',
            description: 'Completed higher secondary education with focus on Science and Mathematics, laying the foundation for Computer Science studies.',
            date: '2019 - 2021',
            type: 'education',
            active: false
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] pt-20 pb-20">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                    Work & Education Timeline
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    My professional journey through education and work experience
                </p>
            </div>

            <div className="flex flex-col items-center relative space-y-16">
                <div className="absolute h-full w-1 bg-gradient-to-b from-red-700 via-red-500 to-red-700 rounded-full" />

                {professional.map((val, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[2.5fr_1fr_2.5fr] z-20 justify-items-center w-[85%] max-w-[1200px] items-start group"
                    >
                        <div className="w-full flex h-15 justify-end items-center pr-8">
                            <SlideAnimate content={false}>
                                <div className="text-right">
                                    <div className="text-red-500 font-semibold mb-1">{val.date}</div>
                                    <div className="text-sm text-gray-400">{val.type === 'work' ? 'Professional Experience' : 'Academic Journey'}</div>
                                </div>
                            </SlideAnimate>
                        </div>
                        <div className="relative">
                            <PopUpAnimate>
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center text-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/50">
                                    {val.type === 'work' ? <MdWork className="text-white" /> : <HiAcademicCap className="text-white" />}
                                </div>
                                {val.active && (<>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-red-500 transition-all duration-500 animate-ping" />
                                </>)}
                            </PopUpAnimate>
                        </div>
                        <SlideAnimate content={true}>
                            <div className="w-full">
                                <div className="bg-[#2a2a2a] rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500 relative before:absolute before:w-4 before:h-4 before:bg-[#2a2a2a] before:left-[-8px] before:top-6 before:rotate-45">
                                    <h3 className="text-xl font-bold text-red-500 mb-2">{val.position}</h3>
                                    <h4 className="text-lg text-gray-200 mb-2">{val.institute}</h4>
                                    <div className="text-sm text-red-400 mb-3">{val.sector}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
                                </div>
                            </div>
                        </SlideAnimate>
                    </div>
                ))}
                <PopUpAnimate>
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-red-500/50">
                        <IoIosStar />
                    </div>
                </PopUpAnimate>
            </div>
        </div>
    )
}