import React from 'react';

import star from '../assets/Star black 1.svg'
import liner from '../assets/Line Shape (1).png'
import liner1 from '../assets/Line Shape3.png'

const Anything = () => {
    return (
        <div className='  mx-auto pt-20 pb-24  border-r-1 border-l-1 border-b-1 py-22 px-16'>
            <div className='text-black text-8xl mt-26'>
                <h1>Anything in Mind? <br />
                    Let's Talk</h1>
            </div>


            <div className='flex items-center justify-center mt-20 gap-12'>


                <img src={liner} alt="" className='w-[263px]' />

                <div className="relative w-fit">
                    <img src={star} alt="" className="w-[252px]" />

                    <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-white text-center">
                        I’m <br /> READY TO TALK
                    </h3>
                </div>

                <img src={liner1} alt="" className='w-[263px]' />

            </div>
        </div>
    );
};

export default Anything;