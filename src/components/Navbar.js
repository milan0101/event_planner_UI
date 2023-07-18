import React, { useState } from 'react';
import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect } from 'react';
import axios from 'axios';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import Modale from './common/Modal';
import MyModal from './common/Mymodal';

function Navbar() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75vw',
        height: '65vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='nav'>
            <div className='left'>
                {/* <EventSmallCalendar className='scal'></EventSmallCalendar> */}
                <SearchIcon className='search'></SearchIcon>
                <input className='inputs'></input>
                <AddCircleIcon className='micons' onClick={handleOpen}></AddCircleIcon>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </div>
            <Modale open={open}
                onClose={handleClose}></Modale>
                {/* <MyModal open={open}
                onclose={handleClose}
                ></MyModal> */}
            <div className='right'>
                <PersonIcon className='user'></PersonIcon>
            </div>
        </div>
    )
}

export default Navbar;