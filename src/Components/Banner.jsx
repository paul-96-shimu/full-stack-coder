import React from 'react';
import bannerimg from '../assets/SHape.png';
import bannerimg2 from '../assets/Vector (1).svg';
import bannerimg3 from '../assets/Line Shape.png';
import bannerimg5 from '../assets/Rectangle  black 3830.png';
import bannerimg4 from '../assets/Bg Pattern.png';
import star from '../assets/circle.png';
import { FaArrowUp } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className=''>
            <div
                className="min-h-screen flex items-center relative overflow-visible px-8 md:px-24 w  border"
                style={{
                    backgroundImage: `url(${bannerimg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Left Text */}
                <div className="z-10 text-left container mx-auto">
                    <div className='flex  gap-17'>
                        <h1 className="leading-none font-[Inter]">
                            <span className="text-[black] text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-normal block">Full-Stack</span>
                            <span className="text-[#2661FF] text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px]  font-normal block">Coder &</span>
                            <span className="text-black text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px]  font-normal   flex gap-6">more <img src={bannerimg2} alt="" className='w-20' /></span>
                        </h1>


                        <div className="relative w-[315px] h-[283px] rounded-full  flex items-center justify-center ">
                            <img src={star} alt="" className="absolute w-full h-full rounded-full object-cover" />
                            <div className="absolute text-center text-black font-bold -rotate-45">
                                LET’S <br /> <strong>ROCK & ROLL</strong>
                            </div>
                        </div>

                    </div>


                    {/* Button */}
                    <button className="mt-6 px-6 py-3 bg-[#2661FF] text-xl text-white  rounded-md inline-flex items-center gap-2 hover:bg-blue-700 transition-all">
                        Let’s Talk <FaArrowUp className="rotate-45" />
                    </button>
                </div>

                {/* Oval Text (Let's Rock & Roll) */}

                {/* Optional: dark card shape in bottom-right */}
                <div className="-mb-200 -bottom-10 relative ">
                  <img src={bannerimg5} alt="" className='w-[642px] h-[500px]' />
                  <img src={bannerimg3} alt="" className='absolute top-40  w-[750px] h-[500px]' />

                </div>





            </div>


            <div className='   min-h-screen  mx-auto  border-r-1 border-l-1 border-b-1'>
                <div style={{ backgroundImage: `url(${bannerimg4})` }} className="bg-cover bg-center w-[1681px] h-[645px] px-15 py-36">
                    <h3 className='text-gray-400  text-6xl'>Hi, I’m</h3>

                    <h2 className='mb-22 text-[#000] text-[140px] font-medium'>Qlark Gil</h2>

                    <p className='text-5xl font-normal'><span className='text-[#000]'>I’m an </span> <span className='text-gray-400 underline underline-offset-1'> award winner</span>
                        <span> creative developer with over</span> <span className='text-gray-400 underline underline-offset-1'> 6 years experience,  </span>
                        <span>based in Amsterdam, the Capital of the Netherlands .</span></p>

                    <div className='mt-20'>
                        <h3> <small className='text-[#000] font-bold'>Follow Me</small></h3>

                        <div className=''>

                            <div className='flex gap-3 mt-6'>

                                <div className='bg-black border border-black rounded-full p-4 '>
                                    <h3 className='text-white'>Fb</h3>

                                </div>
                                <div className=' border border-black rounded-full p-4 '>
                                    <h3 className='text-black'>in</h3>

                                </div>
                                <div className='border border-black rounded-full p-4  '>
                                    <h3 className='text-black'>Be</h3>

                                </div>
                                <div className='border border-black rounded-full p-4   '>
                                    <h3 className='text-black'>Li</h3>

                                </div>




                            </div>





                        </div>
                    </div>

                </div>


            </div>


            <div className='  flex justify-between items-center   border-r-1 border-l-1 border-b-1 px-44'>

                <div>
                    <h2 className='text-black  text-[100px]'>1.9k+ </h2>
                    <h5 className='text-gray-400 text-center'>Total Clients</h5>
                </div>
                <div>
                    <h2 className='text-black  text-[100px]'>1,320+</h2>
                    <h5 className='text-gray-400 text-center'>Website Build</h5>
                </div>

                <div>
                    <h2 className='text-black  text-[100px]'>07</h2>
                    <h5 className='text-gray-400 text-center'>Award Winner</h5>
                </div>


            </div>

        </div>
    );
};

export default Banner;
