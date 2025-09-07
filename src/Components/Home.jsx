import React from 'react';
import Navber from './Navber';
import Banner from './Banner';
import AllKind from './AllKind';
import Explore from './Explore';
import SeeMyClient from './SeeMyClient';
import Anything from './Anything';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='w-[1800px] mx-auto bg-[#FFF]'> 
          <Navber></Navber>
          <Banner></Banner>
          <AllKind></AllKind>
          <Explore></Explore>
          <SeeMyClient></SeeMyClient>

          <Anything></Anything>
          <Footer></Footer>
        </div>
    );
};

export default Home;