import React from 'react';
import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import EventCalendar from './calender/Bcalender';
import EventSmallCalendar from './calender/Smallcalendar';

function Navbar() {
    return (
        <div className='nav'>
            <div className='left'>
            {/* <EventSmallCalendar className='scal'></EventSmallCalendar> */}
                <SearchIcon className='search'></SearchIcon>
                
                <input className='inputs'></input>
            </div>
            <div className='right'>
                <PersonIcon className='user'></PersonIcon>
                
            </div>
        </div>
    )
}

export default Navbar