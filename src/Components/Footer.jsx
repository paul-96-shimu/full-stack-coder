import React from 'react';
import logo from '../assets/Logo.png'
import logo2 from '../assets/P.svg'
import bgimg from '../assets/image 2544.png';

const Footer = () => {
    return (
        <div>

            <div
                className="border-l border-r border-b bg-no-repeat  bg-center bg-contain "
                style={{ backgroundImage: `url(${bgimg})`,

        
            
            
            
            }}
            >
                <div className="flex justify-between items-center pl-[123px] pr-[123px] pt-[130px]">
                    {/* Left Side */}
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-black px-4 py-1">
                                <img src={logo2} alt="Logo" className="w-[22px] h-[45px]" />
                            </div>
                            <img src={logo} alt="Logo" />
                        </div>

                        <h1 className="text-black text-6xl font-medium mt-12 text-left">
                            Today, improve your <br /> business with <br /> quality.
                        </h1>

                        <h6 className="text-gray-500 text-left mt-10 mb-7">
                            210 Qilo Stereet, California, <br />
                            Main OC, USA
                        </h6>
                    </div>

                    {/* Right Side */}
                    <div>
                        <h5 className="text-black text-2xl font-medium">Join Our Newsletter</h5>
                        <form action="" className="relative mt-4">
                            <input
                                type="email"
                                defaultValue="rakabir@gmail.com"
                                className="w-full h-14 rounded-md border border-gray-300 pl-4 pr-24 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-sm bg-black text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></button>
                        </form>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {["Fb", "In", "Be", "Li"].map((item, idx) => (
                                <a key={idx} href="#" target="_blank" rel="noopener noreferrer">
                                    <h3 className="flex items-center justify-center w-12 h-12 text-black font-bold hover:bg-black hover:text-white rounded-full border">
                                        {item}
                                    </h3>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}

            </div>



            <div className="  flex justify-between mt-15">
                <p className="text-center ">
                    &copy; <span className='text-black  text-[20px]'>2025 </span><span className='text-[rgba(0, 0, 0, 0.40)]  text-[20px]'>All Right Reserved. Design by</span>
                     <span className='text-[rgba(0, 0, 0, 0.88)] text-[20px]'>CreativeGigs</span>
                </p>
                <ul className="flex gap-4 ">
                    <li><a href="#" className="text-black text-[20px] font-bold">About</a></li>
                    <li><a href="#" className="text-[rgba(0, 0, 0, 0.40)] text-[20px]  font-bold">Work</a></li>
                    <li><a href="#" className="text-[rgba(0, 0, 0, 0.40)] text-[20px]  font-bold">Blog</a></li>
                    <li><a href="#" className="text-[rgba(0, 0, 0, 0.40)] text-[20px]  font-bold">Contact</a></li>
                </ul>
            </div>



        </div>
    );
};

export default Footer; 