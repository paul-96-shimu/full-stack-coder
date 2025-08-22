import React from 'react';
import logo from '../assets/Logo.png'
import logo2 from '../assets/P.svg'
import bgimg from '../assets/image 2544.png';
import fb from '../assets/Facebook.svg';
const Footer = () => {
    return (
        <div className=' mx-auto border-r-1 border-l-1'>
            <div style={{ backgroundImage: `url(${bgimg})` }} className="bg-cover bg-center px-16 py-22">
                <div className="  flex justify-between items-center ">
                    <div>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-black px-4 py-1'>
                                <img src={logo2} alt="Logo" className=' w-[22px] h-[45px] ' />
                            </div>
                            <img src={logo} alt="Logo" />
                        </div>

                        <h1 className="text-black text-6xl font-medium mt-12 text-left">Today, improve your <br /> business with <br /> quality.</h1>

                        <h6 className='text-gray-500 text-left mt-10'>210 Qilo Stereet, California, <br />
                            Main OC, USA</h6>
                    </div>

                    <div>
                        <h5 className='text-black text-2xl font-medium'>Join Our Newsletter</h5>
                        <form action="" className="relative mt-4">
                            <input
                                type="email"
                                defaultValue="rakabir@gmail.com"
                                className="w-full h-14 rounded-md border border-gray-300 pl-4 pr-24 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-sm bg-black text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Subscribe"
                            >

                            </button>
                        </form>


                        <div className="flex gap-4 mt-6">
                            {/* Facebook */}
                            <div className="relative ">
                                <img src={fb} alt="Facebook" className="w-[65px] h-[65px]" />
                                <span className="absolute inset-0 flex items-center justify-center text-black font-bold">
                                    Fb
                                </span>
                            </div>

                            {/* Instagram */}
                            <div className="relative ">
                                <img src={fb} alt="Instagram" className="w-[65px] h-[65px]" />
                                <span className="absolute inset-0 flex items-center justify-center text-black font-bold">
                                    In
                                </span>
                            </div>

                            {/* Behance */}
                            <div className="relative ">
                                <img src={fb} alt="Behance" className="w-[65px] h-[65px]" />
                                <span className="absolute inset-0 flex items-center justify-center text-black font-bold">
                                    Be
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="border-t border-gray-300 mt-12 pt-8 flex justify-between">
                <p className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()}All Right Reserved. Design by CreativeGigs
                </p>

                    <ul className='flex gap-4 text-lg'>
                        <li><a href="#" className="text-gray-500 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-500">  Work   </a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-500"> Blog   </a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-500">   Contact  </a></li>
                    </ul>
               
            </div>
        </div>
    );
};

export default Footer; 