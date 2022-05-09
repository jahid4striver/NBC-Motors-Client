import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Inquiry from '../Inquiry/Inquiry';
import RecentSales from '../RecentSales/RecentSales';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <RecentSales></RecentSales>
            <Inquiry></Inquiry>
        </div>
    );
};

export default Home;