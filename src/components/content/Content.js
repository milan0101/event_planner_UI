import React from 'react';
import { useState } from 'react';
import './content.scss';
import Upcoming from '../Upcoming/Upcoming';
import Feeds from '../Feed/Feed';
import Toggle from '../common/Toggle';
import EventCalendar from '../calender/Bcalender';

function Content() {
  const [showCalendar, setShowCalendar] = useState(true);

  const handleToggleCalendar = () => {
    debugger
    setShowCalendar(!showCalendar);
  };
  return (
    <div className='main'>
      <Toggle handleToggleCalendar={handleToggleCalendar} ></Toggle>
      {showCalendar && (
        <div id='calen'>
          {/* <Bcalender></Bcalender> */}
          <EventCalendar></EventCalendar>
        </div>)}
      <Feeds />
      <div id='upcome'>
        <Upcoming />
      </div>
    </div>
  );
}

export default Content;
