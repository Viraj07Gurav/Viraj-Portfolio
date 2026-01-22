import React from "react";
import { projectData } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa";
const Work = () => {
    return (
        <div>
            <div className="py-16" id="work">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="mb-6 text-center">
                        <h2 className="text-4xl sm:5xl font-bold">
                            Featured
                            <span className="text-4xl sm:5xl text-teal-800">Projects</span>
                        </h2>
                        <p className="text-zinc-500 text-xl max-w-3xl mx-auto">Cutting-edge web applications built with modern technologies.</p>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {
                            projectData.map((project, index) => (
                                <div key={index} className="group rounded overflow-hidden hover:shadow-lg 
                                transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300">
                                    <div className="relattive flex items-center justify-center">
                                        <a href={project.link} target="_blank">
                                            <img
                                                src={project.image}
                                                alt="project"
                                                className="w-full h-[160px] object-cover"
                                            />
                                        </a>

                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-900 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap mt-6 gap-2">
                                            {
                                                project.tech.map((language, index) => (
                                                    <span className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full ">{language}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex justify-center items-center">
                        <a href="https://github.com/Viraj07Gurav" target="_blank">
                            <button className="px-10 py-4 flex gap-4 items-center justify-center bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-all duration-300">See More <FaArrowRight /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work;