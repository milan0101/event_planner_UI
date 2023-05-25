import React from 'react';
import './Calender.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  return (
    <div className='cbody'>
        <div className="calendar">
        <Calendar className="calendar"></Calendar>
        </div>
    </div>
  )
}

export default Calender