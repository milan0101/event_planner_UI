import React from 'react';
import { useState, useRef } from 'react';
import './content.scss';
import Upcoming from '../Upcoming/Upcoming';
import Feeds from '../Feed/Feed';
import Toggle from '../common/Toggle';
import EventCalendar from '../calender/Bcalender';
import EZDrawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import CalendarDrawer from './calendarDrawer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Content() {
  const calendarRef = useRef();

  const toggleDrawer = () => {
    calendarRef.current.showDrawer();
  }

  return (
    <div className='main'>
      {/* <CalendarMonthIcon onClick={() => toggleDrawer()} className='cicon'></CalendarMonthIcon> */}
      <img src="https://www.lymmhigh.org.uk/wp-content/uploads/2020/11/calendar-icon-blue_sm.png" onClick={() => toggleDrawer()} className='cal'></img>
      <CalendarDrawer ref={calendarRef} />
      <Feeds />
      <div id='upcome'>
        <Upcoming />
      </div>
    </div>
  );
}

export default Content;
