import React from 'react';
import Navbar from './Navbar';
import Calender from './calender/Calender';
import Volunteering from './Volunteering/Volunteering';
import Event from './events/Event';
import './home.scss';
import Upcoming from './Upcoming/Upcoming';
function Home() {
  return (
    <div className='home'>
    <Navbar></Navbar>
    <Calender></Calender>
    <Volunteering></Volunteering>
    <Event></Event>
    <Upcoming></Upcoming>
    </div>
  )
}

export default Home