import React from 'react';

import phonlogo from '../assets/phn.svg';
import weblogo from '../assets/dev.svg';
import booklogo from '../assets/book.svg';
import cta from '../assets/CTA.svg';

import bg from '../assets/bg.png';


const AllKind = () => {
    return (
        <div className='mt-22 '>



            <h2 className='text-8xl font-normal text-left container mx-auto'>All kind of coding <br />solution.</h2>



            <div className="bg-cover bg-center mt-20"

                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                   
                }}


            >







                <div className='flex items-center justify-center gap-11 mt-19 container mx-auto px-12 py-12'>



                    <div className='bg-[#2661FF] rounded-3xl '>
                        <div className='pl-14 pt-17 mb-7'>
                            <img className='w-20 h-20' src={phonlogo} alt="Phone Logo" />
                        </div>

                        <h2 className='text-white text-4xl font-medium pl-14 pr-21 text-left mb-7'>
                            WordPress & Plugin
                            Devlopment.

                        </h2>
                        <h5 className='text-[#FFFFFF] text-left pl-14 font-medium mb-7'> I’m expert in web & mobile related</h5>

                        <ul className='list-none p-4 text-xl text-left pl-14  pb-24  text-white '>
                            <li className='mb-4'>✓ Web Design</li>
                            <li className='mb-4'>✓ Front-End Coding</li>
                            <li className='mb-4'>✓ Mobile App Development</li>
                            <li className='mb-4'>✓ Programming</li>

                        </ul>



                        <div className='flex justify-end pr-6 pb-6'>
                            <button>
                                <img src={cta} alt="Call To Action" />
                            </button>
                        </div>

                    </div>
                    <div className='bg-[#C5D8F5] rounded-3xl '>
                        <div className='pl-14 pt-17 mb-7'>
                            <img className='w-20 h-20' src={weblogo} alt="Phone Logo" />
                        </div>

                        <h2 className='text-black text-4xl font-medium pl-14 pr-21 text-left mb-7'>
                            Web & Mobile App
                            Devlopment

                        </h2>
                        <h5 className='text-[rgba(0, 0, 0, 0.70)] text-left pl-14 font-medium mb-7'> I’m expert in web & mobile related</h5>
                        <ul className='list-none p-4 text-xl text-left pl-14  pb-24  text-black '>
                            <li className='mb-4'>✓ Web Design</li>
                            <li className='mb-4'>✓ Front-End Coding</li>
                            <li className='mb-4'>✓ Mobile App Development</li>
                            <li className='mb-4'>✓ Programming</li>

                        </ul>


                        <div className='flex justify-end pr-6 pb-6'>
                            <button>
                                <img src={cta} alt="Call To Action" />
                            </button>
                        </div>

                    </div>
                    <div className='bg-[#E7EEFA] rounded-3xl '>
                        <div className='pl-14 pt-17 mb-7'>
                            <img className='w-20 h-20' src={booklogo} alt="Phone Logo" />
                        </div>

                        <h2 className='text-black text-4xl font-medium pl-14 pr-21 text-left mb-7'>
                            Interface Design &
                            Development.

                        </h2>
                        <h5 className='text-gray-400 text-left pl-14 font-medium mb-7'> I’m expert in web & mobile related</h5>

                        <ul className='list-none p-4 text-xl text-left pl-14  pb-24  text-black '>
                            <li className='mb-4'>✓ Web Design</li>
                            <li className='mb-4'>✓ Front-End Coding</li>
                            <li className='mb-4'>✓ Mobile App Development</li>
                            <li className='mb-4'>✓ Programming</li>

                        </ul>


                        <div className='flex justify-end pr-6 pb-6'>
                            <button>
                                <img src={cta} alt="Call To Action" />
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AllKind;