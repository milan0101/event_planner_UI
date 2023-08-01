import React from 'react';
import { useState, useRef } from 'react';
import './content.css';
import Upcoming from '../Upcoming/Upcoming';
import Feeds from '../Feed/Feed';
import Toggle from '../common/Toggle';
import EventCalendar from '../calender/Bcalender';
import EZDrawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import CalendarDrawer from './calendarDrawer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventsDrawer from './eventsDrawer';

function Content() {
  const calendarRef = useRef();
  const eventsRef = useRef();

  const toggleDrawer = () => {
    calendarRef.current.showDrawer();
  }

  const toggleEvent = () =>{
    eventsRef.current.showDrawer();
  }

  return (
    <div className='main'>
      {/* <CalendarMonthIcon onClick={() => toggleDrawer()} className='cicon'></CalendarMonthIcon> */}
      <img src="https://www.lymmhigh.org.uk/wp-content/uploads/2020/11/calendar-icon-blue_sm.png" onClick={() => toggleDrawer()} className='cal'></img>
      <CalendarDrawer ref={calendarRef} />
      <Feeds />
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NcBxHPnvquIk4Bj2Z8j-5Q-H3xdvuR5d0KusbFnsUmaps2yk9nP28iuZrxCEX5elT-M&usqp=CAU' onClick={() => toggleEvent()} className='eve'></img>
      <EventsDrawer ref={eventsRef}></EventsDrawer>
      {/* <div id='upcome'>
        <Upcoming />
      </div> */}
    </div>
  );
}

export default Content;
