import React from 'react';
import Navber from './Navber';
import Banner from './Banner';
import AllKind from './AllKind';
import Explore from './Explore';

const Home = () => {
    return (
        <div>
          <Navber></Navber>
          <Banner></Banner>
          <AllKind></AllKind>
          <Explore></Explore>
        </div>
    );
};

export default Home;