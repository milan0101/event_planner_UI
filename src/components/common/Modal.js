import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.scss';
import Health from '../categories/Health';
import Volunteer from '../categories/Volunteer';
import Meetings from '../categories/Meetings';
import Internalevents from '../categories/Internalevents';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';


const Modale = (props) => {

    const { open, onClose } = props;
    const [isopen, setIsOpen] = useState(false);
    const [value, onChange] = useState([new Date(), new Date()]);
    const [category, setCategory] = useState('meetings');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75vw',
        height: '90vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button
                        className="close"
                        onClick={onClose}
                    >
                        <span aria-hidden="true"><CloseIcon></CloseIcon></span>
                    </button>
                    {/* <Close onclick={onClose}></Close> */}
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        <h3>Events and Invitations</h3>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='dropdown'>
                            <select className='dropdown' onChange={handleCategoryChange} value={category}>
                                {/* <option value="">Select Category </option> */}
                                <option value="health">Health</option>
                                <option value="volunteering">Volunteering</option>
                                <option value="meetings">Meetings</option>
                                <option value="internalevents">Internal Events </option>
                            </select>
                        </div>
                        {category === 'health' && <Health></Health>}
                        {category === 'volunteering' && <Volunteer></Volunteer>}
                        {category === 'meetings' && <Meetings></Meetings>}
                        {category === 'internalevents' && <Internalevents></Internalevents>}
                    </Typography>
                    <div className='ebtn'><button className='ebutton' >Add event</button></div>
                    {/* <button onClick={onClose}>close</button> */}
                </Box>
            </Modal>
        </div >
    )
}

export default Modale