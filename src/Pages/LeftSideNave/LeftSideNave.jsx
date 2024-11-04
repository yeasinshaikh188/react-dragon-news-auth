import React, { useEffect, useState } from 'react';
import { FaCalendar } from "react-icons/fa";
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import png1 from '../../assets/1.png'
import png2 from '../../assets/2.png'
import png3 from '../../assets/3.png'

const LeftSideNave = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[]);

    return (
        <div className='space-y-5 font-bold'>
            <h1 className='text-3xl font-bold'>All Category</h1>
            {
                categories.map(category => <NavLink
                className='block px-4 text-[#9F9F9F]'
                to={`/category${category.id}`}
                >{category.name}</NavLink>)
            }

            {/* new section with card 1 */}

    <div className="rounded p-2 w-full mb-3">
  <figure>
    <img  className='mx-auto w-full'
      src={png1}
      alt="sports" />
  </figure>
  <div className='space-y-3 p-2'>
    <h2 className='text-xl font-medium'>
    Bayern Slams Authorities Over Flight Delay to Club World Cup 
    </h2>
    <div className="flex items-center justify-between">
      <span>sports</span>
      <span className='text-xs flex items-center'><FaCalendar className='mr-1'></FaCalendar> {moment().format("MMMM Do YYYY")}</span>
    </div>
  </div>
</div>
            {/* new section with card 2 */}

    <div className="rounded p-2 w-full mb-3">
  <figure>
    <img className='mx-auto w-full'
      src={png2}
      alt="sports" />
  </figure>
  <div className='space-y-3 p-2'>
    <h2 className='text-xl font-medium'>
    Bayern Slams Authorities Over Flight Delay to Club World Cup
    </h2>
    <div className="flex items-center justify-between">
      <span>sports</span>
      <span className='text-xs flex items-center'><FaCalendar className='mr-1'></FaCalendar> {moment().format("MMMM Do YYYY")}</span>
    </div>
  </div>
</div>
            {/* new section with card 3*/}

    <div className="rounded p-2 w-full mb-3">
  <figure>
    <img  className='mx-auto w-full'
      src={png3}
      alt="sports" />
  </figure>
  <div className='space-y-3 p-2'>
    <h2 className='text-xl font-medium'>
    Bayern Slams Authorities Over Flight Delay to Club World Cup
    </h2>
    <div className="flex items-center justify-between">
      <span>sports</span>
      <span className='text-xs flex items-center'><FaCalendar className='mr-1'></FaCalendar> {moment().format("MMMM Do YYYY")}</span>
    </div>
  </div>
</div>
        </div>
    );
};

export default LeftSideNave;