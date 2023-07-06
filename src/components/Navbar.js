import React, { useState } from 'react';
import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect } from 'react';
import axios from 'axios';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function Navbar() {

    const [open, setIsOpen] = useState(false);
    const [event, setEvent] = useState(false);
    const [value, onChange] = useState([new Date(), new Date()]);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }


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

    // const handleClick = () =>{
    //     const [event, setEvent] = useState(false);
    // }

    function handleClick(){
       setEvent(true);
    }


    // useEffect(() => {
    //     console.log(movies)
    //     let token = sessionStorage.getItem("jwtToken");
    //     axios.get(url, {
    //         headers: {
    //             "Authorization": `x-auth-token ${token}`
    //         }
    //     }).then(response => {
    //         setMovies(response.data.docs);
    //     }).catch(error => console.log(error));
    // }, []);

    // const handleSubmit = async (values, { setSubmitting }) => {
    //     try {
    //         const response = await axios.post('http://localhost:4000/users/', {
    //             name: values.username,   
    //             email: values.email,
    //             password: values.password
    //         });
    //         toast.success('Sign up successful');
    //     } catch (error) {
    //         console.log('error', error);
    //         toast.error('user already registered');
    //         navigate('/home')
    //     }
    //     setSubmitting(false);
    // };

    // const handleClick = (values) =>{
    //     try {
    //         const response = await axios.post()
    //     }
    // }



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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        <h3>Events and Invitations</h3>
                    </Typography>
                    {/* <div className='main'>
                      <div className='left'></div>
                      <div className='right'></div>
                    </div> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='etitle'>
                            <h4>Event Title :</h4>
                            <input className='einput'></input>
                        </div>
                        
                        <div className='etitle'>
                            <h4>Event Description:</h4>
                            <input className='einput'></input>
                        </div>
                        <div className='etitle'>
                            <h4>Event Date :</h4>
                            <DateRangePicker onChange={onChange} value={value} format='dd/MM/y' className="react-daterange-picker_day">

                            </DateRangePicker>
                        </div>
                        <div className='etitle'>
                            <h4>Add people :</h4>
                            <input className='einput'></input>
                        </div>
                    </Typography>
                    <div className='ebtn'><button className='ebutton' onClick={handleClick}>Add event</button></div>
                </Box>
            </Modal>
            <div className='right'>
                <PersonIcon className='user'></PersonIcon>
            </div>
        </div>
    )
}

export default Navbar;