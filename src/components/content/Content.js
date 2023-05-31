import React from 'react';
import { useState } from 'react';
import './content.scss';
import Upcoming from '../Upcoming/Upcoming';
import Calender from '../calender/Calender';
import Feeds from '../Feed/Feed';
import { useEffect } from 'react';
import Bcalender from '../calender/Bcalender';
import Toggle from '../common/Toggle';

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
          <Bcalender></Bcalender>
        </div>)}
      <Feeds />
      <div id='upcome'>
        <Upcoming />
      </div>
    </div>
  );
}

export default Content;
