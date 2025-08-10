import React from 'react';
import icon from '../assets/Icon.svg'
import { FaArrowUp } from "react-icons/fa6";
import bg1 from '../assets/arrrrow.png';
import circle from '../assets/circle.svg';
import allimg from '../assets/all logo.svg';

const SeeMyClient = () => {
    return (
        <div className='bg-[#2661FF]'>


            <div className='flex items-center justify-between px-24 mt-20'>
                <h1 className='text-8xl font-normal  text-white   text-left  flex items-center justify-center
                              '>See My Client
                    Feedback  <img src={bg1} alt="" /></h1>




                <button className='btn bg-[#2661FF] text-white'>Explore All  <FaArrowUp className="rotate-45" /></button>
            </div>

            <div className='flex items-center justify-center mt-20 gap-12'>


                <div className='bg-[rgba(255,255,255,0.25)]'>
                    <div className=' text-white   font-bold  rounded-3xl'>

                        <img src={icon} alt="" />
                        <p className=''>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time.  <br /> Highly recommended!</p>




                    </div>

                    <div className='flex'>
                        <div>
                            <h4>Rashes ka</h4>
                            <h5>Rashes ka
                                Managing Director, Walton</h5>
                        </div>


                        <div>
                            <img src={circle} alt="" />
                        </div>


                    </div>

                </div>

                <div className='bg-[rgba(255,255,255,0.25)]'>
                    <div className=' text-white   font-bold  rounded-3xl'>

                        <img src={icon} alt="" />
                        <p className=''>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time.  <br /> Highly recommended!</p>




                    </div>

                    <div className='flex'>
                        <div>
                            <h4>Shamol Cina</h4>
                            <h5>Rashes ka
                                CEO & Head of Sky Inc.</h5>
                        </div>


                        <div>
                            <img src={circle} alt="" />
                        </div>
                    </div>

                </div>


            </div>




            <div className='mt-12'>

                <img src={allimg} alt="" />

            </div>

        </div>
    );
};

export default SeeMyClient;
