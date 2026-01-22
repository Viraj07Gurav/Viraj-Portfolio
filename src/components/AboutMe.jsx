import { FaPersonRifle, FaPhone } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { assets, profileData } from '../assets/asstes'

const contactInfo = [
    {
        icon: IoPersonCircleOutline,
        label: "Name",
        value: "Viraj Gurav",
    },
    {
        icon: FaPhone,
        label: "Phone",
        value: "+91 9619206757",
    },
    {
        icon: MdOutlineMail,
        label: "Email",
        value: "Viraj07gurav@gmail.com",
    },
];


const AboutMe = () => {
    return (
        <div className="py-16" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-1">
                        <h2 className="text-4xl sm:5xl font-bold"><span className=" text-teal-800">About</span>me</h2>
                        <p className="text-md mb-2 leading-8">
                            I’m a Fullstack developer with a passion for creating immersive web experiences. As an IT graduate, I’ve worked on academic and personal projects to bring ideas to life.

My approach combines technical knowledge with clean design thinking to build applications that are functional, responsive, and visually engaging.
                            </p>
                        {/* <p className="text-md mb-2 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda dicta perferendis molestiae quibusdam corrupti aliquid incidunt obcaecati rem corporis possimus! Necessitatibus deleniti recusandae facilis ipsa nobis a consequuntur consequatur?
                        </p> */}
                        <div className="">
                            <table className="border-collapse text-gray-700 w-80 md:w-100">
                                <tbody>
                                    {contactInfo.map((item, index) => (
                                        <tr key={index} className="h-12 ">
                                            <td className="pl-3 text-blue-500 text-center border-t border-b border-teal-700"><item.icon className="text-zinc-500" size={24} /></td>
                                            <td className="font-medium border-t border-b border-teal-700">{item.label}</td>
                                            <td className="pr-3 border-t border-b border-teal-700">:</td>
                                            <td className="text-gray-900 border-t border-b border-teal-700">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                        {/* profile cards */}
                        <div className="flex flex-col md:flex-row gap-10 mt-4">
                            {
                                profileData.map((data, index) => (
                                    <div key={index} className="w-full h-30 md:h-40 sm:w-40  p-6 border border-zinc-200 rounded hover:border-zinc-500 hover:border-b-4 
                                            hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 hover:-translate-y-1 transition-all duration-300">
                                        <h3 className="border-b border-teal-600 pb-1">{data.title}</h3>
                                        <p className="text-sm py-2 text-zinc-600">{data.technologies.join(', ')}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <a
                            href="/Resume/Viraj_Gurav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <button className="px-10 py-4 rounded-full bg-teal-700 text-white hover:bg-teal-500 mt-3 transition-all duration-300 ">
                                Download Resume
                            </button>
                        </a>


                    </div>


                    {/* profile imag */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="overflow-hidden">
                                <img src={assets.myImage2} className="w-full h-full object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;