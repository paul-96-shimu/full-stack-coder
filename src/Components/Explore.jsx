import React from 'react';

import bg from '../assets/image 2520.png';
import bg3 from '../assets/patarn.png';

import bg1 from '../assets/arrrrow.png';

import bg2 from '../assets/111111ar.png';
import button from '../assets/button arrow.png';
const Explore = () => {
    return (
        <div className='bg-[#FFF] border-r-1 border-l-1  '>



            <div className='flex justify-between  items-center border-b-1 pl-[123px] pt-[85px] pb-[80px] pr-[73px]'>
                <h1 className='text-8xl font-normal    text-left  
                              '>Explore My Top  <br />Creations  <span className="inline-flex items-center justify-center"> <img src={bg1} alt="" className="  align-middle
                              relative translate-y-8  w-[181px] h-[114px] " /></span>  </h1>


                <button className=' bg-[#2661FF] text-white pl-[29px] pr-[58px] pt-[8px] pb-[14px] text-[20px]  inline-flex items-center gap-4'>Explore All <img src={button} alt="" className='w-[15px] h-[13p[]]' /></button>


            </div>


            <div className=''>







                <div className='flex  items-center  justify-between text-center mt-28 gap-12 border-b-1 pb-20 pl-[75px] pr-[75px]'>
                    <div>

                        <h5 className='text-[rgba(0,0,0,0.40)] text-[24px] text-left mb-4'>WordPress</h5>
                        <h2 className='font-medium  text-[64px] text-left mb-22'>Website <br />
                            WordPress Core <br />
                            Coding.


                        </h2>

                      <button className="mr-12 border rounded-full flex items-center justify-center pt-[19px] pb-[22px] pl-[40px] pr-[40px] hover:bg-black group">
                            <img src={bg2} alt="" className="w-[24px] group-hover:invert transition-all duration-300" />
                        </button>

                    </div>




                    <div className='bg-[#F4F7FF] '>
                        <img src={bg} alt="Background" className=' w-[965px] ' />
                    </div>
                </div>








                <div className='flex  items-center justify-between text-center mt-28 gap-12 border-b-1 pb-20 pl-[75px] pr-[75px] '>


                    <div className='bg-[#F4F7FF] '>
                        {/* <img src={bg3} alt="Background" className='' /> */}
                        <img src={bg3} alt="Background" className='w-[965px]' />
                    </div>

                    <div>

                        <h5 className='text-[rgba(0,0,0,0.40)]  text-[24px]  text-left mb-4'>Application Development</h5>
                        <h2 className='font-medium  text-[64px] text-left mb-22'>Mobile Application <br />
                            Design.
                        </h2>




                       <button className="mr-12 border rounded-full flex items-center justify-center pt-[19px] pb-[22px] pl-[40px] pr-[40px] hover:bg-black group">
                            <img src={bg2} alt="" className="w-[24px] group-hover:invert transition-all duration-300" />
                        </button>
                    </div>





                </div>





                <div className='flex  items-center justify-between text-center mt-28 gap-12  pl-[75px] pr-[75px]'>
                    <div>

                        <h5 className='text-[rgba(0,0,0,0.40)] text-[24px]  text-left mb-4'>Web Design</h5>
                        <h2 className='font-medium  text-[64px] text-left mb-22'>Figma to <br />
                            html5 & Css3 <br />
                            Convert
                        </h2>



                        <button className="mr-12 border rounded-full flex items-center justify-center pt-[19px] pb-[22px] pl-[40px] pr-[40px] hover:bg-black group">
                            <img src={bg2} alt="" className="w-[24px] group-hover:invert transition-all duration-300" />
                        </button>
                    </div>




                    <div className='bg-[#F4F7FF] mb-20 '>
                        <img src={bg} alt="Background" className='w-[965px]' />
                    </div>
                </div>



            </div>





        </div>
    );
};

export default Explore;  