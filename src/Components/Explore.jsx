import React from 'react';

import bg from '../assets/image 2520.png';

import bg1 from '../assets/arrrrow.png';

import bg2 from '../assets/CTA2.svg';
const Explore = () => {
    return (
        <div className='bg-[#FFF]  mx-auto border-r-1 border-l-1  '>



            <div className='flex items-center justify-between px-24 py-22   border-b-1'>
                <h1 className='text-8xl font-normal    text-left  flex items-center justify-center
                              '>Explore My Top  <br />Creations    <img src={bg1} alt="" /></h1>




                <button className='btn bg-[#2661FF] text-white'>Explore All</button>
            </div>
            <div className='flex  items-center justify-center text-center mt-28 gap-12'>
                <div>

                    <h5 className='text-gray-400 text-left mb-4'>WordPress</h5>
                    <h2 className='font-medium  text-6xl text-left mb-22'>Website <br />
                        WordPress Core <br />
                        Coding.
                    </h2>




                    <img src={bg2} alt="" className='w-20' />

                </div>




                <div className='bg-[#F4F7FF] '>
                    <img src={bg} alt="Background" className='' />
                </div>
            </div>








            <div className='flex  items-center justify-center text-center mt-28 gap-12'>


                <div className='bg-[#F4F7FF] '>
                    <img src={bg} alt="Background" className='' />
                </div>

                <div>

                    <h5 className='text-gray-400 text-left mb-4'>Application Development</h5>
                    <h2 className='font-medium  text-6xl text-left mb-22'>Mobile Application <br />
                        Design.
                    </h2>




                    <img src={bg2} alt="" className='w-20' />

                </div>





            </div>





            <div className='flex  items-center justify-center text-center mt-28 gap-12'>
                <div>

                    <h5 className='text-gray-400 text-left mb-4'>Web Design</h5>
                    <h2 className='font-medium  text-6xl text-left mb-22'>Figma to <br />
                        html5 & Css3 <br />
                        Convert
                    </h2>




                    <img src={bg2} alt="" className='w-20' />

                </div>




                <div className='bg-[#F4F7FF] '>
                    <img src={bg} alt="Background" className='' />
                </div>
            </div>








        </div>
    );
};

export default Explore;  