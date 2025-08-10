import React from 'react';
import icon from '../assets/Icon.svg'
import { FaArrowUp } from "react-icons/fa6";
import bg1 from '../assets/arrrrow.png';
import circle from '../assets/circle.svg';
import allimg from '../assets/all logo.svg';

const SeeMyClient = () => {
    return (
        <div className='bg-[#2661FF]  mt-35 pb-21 pt-18'>


            <div className='flex items-center  px-24 mt-20'>
                <h1 className='text-8xl font-normal  text-white   text-left  flex items-center justify-center
                              '>See My Client
                    Feedback  <img src={bg1} alt="" /></h1>




                <button className='btn bg-[#2661FF] text-white'>Explore All  <FaArrowUp className="rotate-45" /></button>
            </div>

            <div className='flex  mt-20 gap-12  ml-18'>


                <div className='bg-[rgba(255,255,255,0.07)] rounded-3xl pt-13 pl-19 pb-12 pr-14'>
                    <div className=' text-[#FFF]  font-normal text-left'>

                        <img src={icon} alt="" />
                        <p className=' '>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time.  <br /> Highly recommended!</p>




                    </div>

                    <div className='flex justify-between items-center gap-x-20'>
                        <div className=' text-left'>
                            <small className='text-white '>Rashes ka</small>
                            <br />
                            <small className='text-[rgba(255,255,255,0.25)]'>
                                Managing Director, Walton</small>
                        </div>


                        <div className=''>
                            <img src={circle} alt=""  className='w-8'/>
                        </div>


                    </div>

                </div>

                  <div className='bg-[rgba(255,255,255,0.07)] rounded-3xl pt-13 pl-19 pb-12 pr-14'>
                    <div className=' text-[#FFF]  font-normal  text-left'>

                        <img src={icon} alt="" />
                        <p className=' '>Quick solutions coupled with great <br /> performance—a recommendation <br /> that's unequivocal.</p>




                    </div>

                    <div className='flex justify-between items-center gap-x-20'>
                        <div className=' text-left'>
                            <small className='text-white '>Shamol Cina</small>
                            <br />
                            <small className='text-[rgba(255,255,255,0.25)]'>
                              CEO & Head of Sky Inc</small>
                        </div>


                        <div className=''>
                            <img src={circle} alt=""  className='w-8'/>
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
