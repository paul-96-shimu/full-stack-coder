import React from 'react';
import bannerimg from '../assets/SHape.png';
import bannerimg2 from '../assets/Vector (1).svg';
import bannerimg3 from '../assets/Line Shape.png';
import bannerimg4 from '../assets/Bg Pattern.png';
import star from '../assets/circle.png';
import { FaArrowUp } from "react-icons/fa6";


const Banner = () => {
    return (
        <div>
            <div
                className="min-h-screen flex items-center relative overflow-hidden px-8 md:px-24 w"
                style={{
                    backgroundImage: `url(${bannerimg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Left Text */}
                <div className="z-10 text-left container mx-auto">
                    <div className='flex items-baseline gap-17'>
                        <h1 className="leading-none font-[Inter]">
                            <span className="text-[black] text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-normal block">Full-Stack</span>
                            <span className="text-[#2661FF] text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px]  font-normal block">Coder &</span>
                            <span className="text-black text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px]  font-normal   flex gap-6">more <img src={bannerimg2} alt="" className='w-20' /></span>
                        </h1>


                        <div className="  -rotate-45 mt-3">
                            <img src={star} alt="" className='w-20' />
                            LET’S <br /> <strong>ROCK & ROLL</strong>
                        </div>

                    </div>


                    {/* Button */}
                    <button className="mt-6 px-6 py-3 bg-[#2661FF] text-xl text-white  rounded-md inline-flex items-center gap-2 hover:bg-blue-700 transition-all">
                        Let’s Talk <FaArrowUp className="rotate-45" />
                    </button>
                </div>

                {/* Oval Text (Let's Rock & Roll) */}

                {/* Optional: dark card shape in bottom-right */}
                <div className="absolute top-200 right-70 w-[300px] h-[300px] md:w-[450px] md:h-[500px] bg-black rounded-xl ">
                    <img src={bannerimg3} alt="" />
                    <img src={bannerimg2} alt="" className='w-20' />

                </div>





            </div>


            <div className='  mt-43 container mx-auto'>
                <div style={{ backgroundImage: `url(${bannerimg4})` }} className="bg-cover bg-center w-[1681px] h-[645px]">
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


            <div className=' flex justify-between items-center mt-20 container mx-auto'>

                <div>
                    <h2 className='text-black  text-[100px]'>1.9k+ </h2>
                    <small className='text-gray-400'>Total Clients</small>
                </div>
                <div>
                    <h2 className='text-black  text-[100px]'>1,320+</h2>
                    <small className='text-gray-400'>Website Build</small>
                </div>

                <div>
                    <h2 className='text-black  text-[100px]'>07</h2>
                    <small className='text-gray-400'>Award Winner</small>
                </div>


            </div>

        </div>
    );
};

export default Banner;
