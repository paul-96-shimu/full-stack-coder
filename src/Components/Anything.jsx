import React from 'react';

import star from '../assets/Star black 1.svg'
import liner from '../assets/Line Shape (1).png'
import liner1 from '../assets/Line Shape3.png'
import button from '../assets/button arrow.png';

const Anything = () => {
    return (
        <div className='  mx-auto pt-20 pb-24  border-r-1 border-l-1 border-b-1 px-20'>
            <div className='text-black text-8xl mt-26 text-center'>
                <h1>Anything in Mind? <br />
                    Let's Talk</h1>
            </div>


            <div className='flex items-center justify-between mt-20 '>


                <img src={liner} alt="" className='w-[263px]' />

                <div className="relative w-fit">
                    <img src={star} alt="" className="w-[252px]" />

                    <h3 className="absolute inset-0 flex  flex-col gap-4 items-center justify-center text-2xl font-medium text-white text-center">
                        I’M <br /> READY TO TALK
                          <img src={button} alt="" />
                   
                    </h3>
                       

                </div>

                <img src={liner1} alt="" className='w-[263px]' />

            </div>
        </div>
    );
};

export default Anything;