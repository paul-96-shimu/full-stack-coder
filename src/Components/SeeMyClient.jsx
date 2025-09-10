import React from 'react';
import Marquee from "react-fast-marquee";
import icon from '../assets/Icon.svg'
import { FaArrowUp } from "react-icons/fa6";
import bg1 from '../assets/icon  click.png';
import circle from '../assets/circle.svg';

import button from '../assets/button arrow.png';

import marque from '../assets/teamilo.svg';
import marque1 from '../assets/qmij.svg';
import marque2 from '../assets/portal.svg';
import marque3 from '../assets/microsoft.svg';
import marque4 from '../assets/dijuice.svg';
import star from '../assets/star.svg';


const SeeMyClient = () => {
    return (
        <div className='bg-[#2661FF]   min-h-screen '>

            <div className='container mx-auto py-12  '>


                <div className='flex items-center  justify-between  mt-20'>
                    <h1 className='text-8xl font-normal  text-white '>
                        See My Client <br />

                        <span className='flex items-center justify-center mb-6'>  Feedback  <img src={bg1} alt="" className=' translate-4' /></span>

                    </h1>




                    <button className='btn bg-[#2661FF] text-white'>Explore All  <img src={button} alt="" /></button>
                </div>

                <div className='flex gap-10  mt-16'>


                    <div className='bg-[rgba(255,255,255,0.07)] rounded-3xl pt-13 pl-19 pb-12 pr-14 w-[750px] h-[472px]'>
                        <div className=' text-[#FFF]  font-normal  text-[36px]'>

                            <img src={icon} alt="" />
                            <p className=' '>Game-changer! Boosted efficiency, <br /> simplified tasks, and saved time.  <br /> Highly recommended!</p>




                        </div>

                        <div className='flex justify-between items-center  pt-14'>
                            <div className=' text-left'>
                                <small className='text-white '>Rashes ka</small>
                                <br />
                                <small className='text-[rgba(255,255,255,0.25)]'>
                                    Managing Director, Walton</small>
                            </div>


                            <div className=''>
                                <img src={circle} alt="" className='w-8' />
                            </div>


                        </div>

                    </div>

                    <div className='bg-[rgba(255,255,255,0.07)] rounded-3xl pt-13 pl-19 pb-12 pr-14  w-[750px] h-[472px]'>
                        <div className=' text-[#FFF]  font-normal   text-[36px]'>

                            <img src={icon} alt="" />
                            <p className='mt-6 '>Quick solutions coupled with great <br /> performance—a recommendation <br /> that's unequivocal.</p>




                        </div>

                        <div className='flex justify-between items-center pt-14'>
                            <div className=' text-left'>
                                <small className='text-white '>Shamol Cina</small>
                                <br />
                                <small className='text-[rgba(255,255,255,0.25)]'>
                                    CEO & Head of Sky Inc</small>
                            </div>


                            <div className='mt-10'>
                                <img src={circle} alt="" className='w-8' />
                            </div>


                        </div>

                    </div>


                </div>






            </div>




            <div className='mt-12 pb-[83px] flex items-center justify-center gap-20 '>
                   <Marquee pauseOnHover={false} speed={50} gradient={false}>
                       <img src={marque} alt="" className='mx-6' />
                       <img src={star} alt="" className='mx-6' />
                       <img src={marque1} alt="" className='mx-6' />
                       <img src={star} alt="" className='mx-6' />
                       <img src={marque2} alt="" className='mx-6' />
                       <img src={star} alt="" className='mx-6' />
                       <img src={marque3} alt="" className='mx-6' />
                       <img src={star} alt="" className='mx-6' />
                       <img src={marque4} alt="" className='mx-6' />
                       <img src={star} alt="" className='mx-6' />
                   </Marquee>
            </div>
        </div>
    );
};

export default SeeMyClient;
