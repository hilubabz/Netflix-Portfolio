import ScrollAnimate from "../Components/ScrollAnimate";
import skills from './skill'

export default function Skills() {

    return (
        <div className="pt-10">
            {skills.map((val, index) =>
                <div key={index} className="pt-10 mx-60">
                    <div className="text-4xl text-center font-extrabold">
                        <div className="relative inline-block">
                            <ScrollAnimate>

                                {val.name}
                                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-700 rounded-2xl ease-in-out duration-[0.5s]`}></div>

                            </ScrollAnimate>
                        </div>
                    </div>
                    <div className="flex gap-7 flex-wrap pt-10">
                        {val.skill.map((value, ind) =>
                            <div key={ind} className="bg-[#1E1E1E] flex flex-col items-center justify-center space-y-8 h-[220px] w-[200px] rounded-2xl shadow-lg hover:shadow-red-700 hover:scale-[1.1] ease-in-out duration-[0.5s] cursor-pointer">
                                {value.icon}
                                <div className="space-y-4">
                                    <ScrollAnimate>
                                        <div className="text-2xl text-center font-semibold">{value.language}</div>
                                    </ScrollAnimate>
                                    <ScrollAnimate>
                                        <div className="text-center text-sm px-7">{value.description}</div>
                                    </ScrollAnimate>
                                </div>
                            </div>)}

                    </div>
                </div>
            )}
        </div>

    )
}