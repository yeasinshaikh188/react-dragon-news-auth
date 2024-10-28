import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNave from '../LeftSideNave/LeftSideNave';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData(); 
    console.log(news) 
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div>
                    <LeftSideNave></LeftSideNave>
                </div>

                {/* news contianer  */}
                <div className='md:col-span-2'>
                <h2 className='text-4xl font-bold'>Dragon News Hom </h2>
                    {
                        news.map(aNews =><NewsCard
                             key={aNews._id} 
                             news={aNews}></NewsCard>)
                    }
                    
                </div>

                {/* left side navigation  */}
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;