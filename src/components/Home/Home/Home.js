import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import RecentSales from '../RecentSales/RecentSales';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <RecentSales></RecentSales>
        </div>
    );
};

export default Home;