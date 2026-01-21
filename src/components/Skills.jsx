import { skillsDataBackend, skillsDataFontEnd } from "../assets/asstes";


const Skills = () => {
    return (
        <div id='skills' className="py-20" >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-6">
                    <h2 className="text-4xl sm:5xl font-bold"><span className=" text-teal-700">Technical</span> Skills</h2>
                    <p className="text-zinc-500 text-xl max-w-3xl mx-auto">Mastering the tools that power modern web experiences.</p>
                </div>
                <div className="text-center mb-4"> <h2 className="text-2xl">Frontend Skills</h2></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {
                        skillsDataFontEnd.map((skill, index) => (
                            <div className="p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center
                            hover:border-b-4 hover:border-teal-800 hover:border-r-4
                            hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300" key={index}>
                                <div className="w-20 h-20 mx-auto rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-5">
                                    <skill.icon className="w-14 h-14 text-teal-800" />
                                </div>
                                <h4 className="text-xl text-zinc-500 font-bold">{skill.title}</h4>
                            </div>
                        ))
                    }
                </div>

                {/* backend skills */}
                {/* <div className="">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        skillsDataBackend.map((skill,index)=>(
                            <div className="p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center
                            hover:border-b-4 hover:border-teal-800 hover:border-r-4
                            hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300" key={index}>
                                <div className="w-20 h-20 mx-auto rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-5">
                                    <skill.icon className="w-14 h-14 text-teal-800"/>
                                </div>
                                <h4 className="text-xl text-zinc-400 font-bold">{skill.title}</h4>
                            </div>
                        ))
                    }
                </div>
                </div> */}

                {/* backend skills */}
                {/* backend skills */}
                <div className="text-center mt-10 mb-4"> <h2 className="text-2xl">Backend Skills</h2></div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
                    <div className="lg:col-start-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
                        {skillsDataBackend.map((skill, index) => (
                            <div
                                key={index}
                                className="w-full  p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center
            hover:border-b-4 hover:border-teal-800 hover:border-r-4
            hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-5">
                                    <skill.icon className="w-14 h-14 text-teal-800" />
                                </div>
                                <h4 className="text-xl text-zinc-500 font-bold">{skill.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Skills;