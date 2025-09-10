import React from 'react';
import bannerimg from '../assets/SHape.png';
import bannerimg2 from '../assets/Vector (1).svg';
import bannerimg3 from '../assets/Line Shape.png';
import bannerimg5 from '../assets/Rectangle  black 3830.png';
import bannerimg4 from '../assets/newbg.png';
import bluestar from '../assets/blueStar 1.png';
import button from '../assets/button arrow.png';
import star from '../assets/circle.png';
import { FaArrowUp } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className=''>
            <div
                className="flex items-center relative  border  "
                style={{
                    backgroundImage: `url(${bannerimg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Left Text */}
                <div className="pt-[97px]   pb-[268px] pl-[73px] ">
                    <div className=' flex gap-10'>
                        <div>

                            <h1 className="leading-none font-[Inter]">
                                {/* First line */}
                                <span className="text-black text-[250px] inline-block">
                                    Full&#8209;Stack
                                </span>

                                {/* Second line */}
                                <span className="block text-[#2661FF] text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-normal">
                                    Coder &
                                </span>

                                {/* Third line */}
                                <span className="inline-flex items-center gap-6 text-black text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-normal">
                                    more <img src={bannerimg2} alt="" className="w-20" />
                                </span>
                            </h1>


                        </div>

                        <div className="relative w-[315px] h-[283px] rounded-full  flex items-center justify-center ">
                            <img src={star} alt="" className="absolute  rounded-full object-cover" />
                            <div className="absolute text-center text-black font-bold -rotate-45">
                                LET’S <br /> <strong>ROCK & ROLL</strong>
                            </div>
                        </div>

                    </div>


                    {/* Button */}


                    <button className="mt-25 px-6 py-3 bg-[#2661FF] text-xl text-white  rounded-md inline-flex items-center gap-2 hover:bg-blue-700 transition-all">
                        Let’s Talk <img src={ button} alt="" />
                    </button>
                </div>

                {/* Oval Text (Let's Rock & Roll) */}

                {/* Optional: dark card shape in bottom-right */}
                <div className=" relative -left-[600px] -bottom-100 ">
                    <img src={bannerimg5} alt="" className='w-full   min-w-[642px] ' />
                    <img src={bannerimg3} alt="" className='absolute top-80  w-[750px] ' />

                </div>





            </div>


        <div
  className="border-r border-l border-b bg-no-repeat bg-center bg-contain"
  style={{
    backgroundImage: `url(${bannerimg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="pl-[123px] pt-43 pr-[77px]">
    <h3 className="text-gray-400 text-6xl">Hi, I’m</h3>

    <h2 className="mb-22 text-[#000] text-[140px] font-medium">Qlark Gil</h2>

    <p className="text-5xl font-normal">
      <span className="text-[#000]">I’m an </span>{" "}
      <span className="text-gray-400 underline underline-offset-1">
        award winner
      </span>
      <span> creative developer with over</span>{" "}
      <span className="text-gray-400 underline underline-offset-1">
        6 years <br /> experience,
      </span>
      <span>
        based in Amsterdam, the Capital of the <br /> Netherlands .
      </span>
    </p>

    {/* Follow Me Section */}
    <div className="mt-20">
      <h3 className="text-[20px]">Follow Me</h3>
      <div className="flex justify-between">
        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <h3
              className="flex items-center justify-center 
                w-12 h-12 text-black font-bold 
                hover:bg-black hover:text-white 
                rounded-full border"
            >
              Fb
            </h3>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <h3
              className="flex items-center justify-center 
                w-12 h-12 text-black font-bold 
                hover:bg-black hover:text-white 
                rounded-full border"
            >
              In
            </h3>
          </a>

          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <h3
              className="flex items-center justify-center 
                w-12 h-12 text-black font-bold 
                hover:bg-black hover:text-white 
                rounded-full border"
            >
              Be
            </h3>
          </a>

          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <h3
              className="flex items-center justify-center 
                w-12 h-12 text-black font-bold 
                hover:bg-black hover:text-white 
                rounded-full border"
            >
              Li
            </h3>
          </a>
        </div>

        {/* Blue star section */}
        <div className="relative mb-27 ">
          <img src={bluestar} alt="" className="w-[333px] h-[234px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <h3 className="text-white text-center mb-4 text-[24px]">I’M <br /> READY TO TALK</h3>
         <img src={ button}alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






{/* counter part */}
            <div className='  flex justify-between items-center   border-r-1 border-l-1 border-b-1 px-44 py-20'>

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
