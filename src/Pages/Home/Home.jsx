import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNave from '../LeftSideNave/LeftSideNave';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='border'>
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className='md:col-span-2 border'>
                    <h2 className='text-4xl font-bold'>News comming soon...</h2>
                </div>
                <div className='border p-3'>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;