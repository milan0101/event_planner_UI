import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css';
import Sports from '../categories/Sports';
import Events from '../categories/Events';
import Meetings from '../categories/Meetings';
import Internalevents from '../categories/Internalevents';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import axios from 'axios';
import { apiurl } from '../config/apiUrl';
import Post from '../categories/Post';
import Health from '../categories/Health';
import Volunteering from '../categories/Volunteering';


const Modale = (props) => {


    const [isopen, setIsOpen] = useState(false);
    const [value, onChange] = useState([new Date(), new Date()]);

    const [subCategory, setSubCategory] = useState('health');




    const [currentDate, setCurrentDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [feeds, setFeeds] = useState();
    const dragDateRef = useRef();
    const dragindexRef = useRef();
    const [showPortal, setShowPortal] = useState(false);
    const [portalData, setPortalData] = useState({});
    const calendarRef = useRef();
    const [mopen, setMopen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75vw',
        height: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const { open, onClose } = props;

    const [category, setCategory] = useState('meetings');
    const [postSubCategory, setPostSubCategory] = useState('health'); // Default sub-category

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setPostSubCategory('health'); // Reset sub-category when changing main category
    };


    async function onEventAdded(data) {


        try {
            await axios.post(apiurl.getContent, data);
            console.log(data);
            // Refresh the events after successful addition
            handleDateSet(); // Pass the data.event to handleDateSet
        } catch (error) {
            console.error("Error adding event:", error);
        }
    }

    async function handleDateSet() {
        try {

            const start_date = calendarRef.current.getApi().view.currentStart;
            const end_date = calendarRef.current.getApi().view.currentEnd;

            const response = await axios.get(
                apiurl.getContent
            ).then((response) => {
                setFeeds(response.data);
                const formattedEvents = response.data.map((feed) => ({
                    date: new Date(feed.post_date),
                    title: feed.post_title,
                    // color: getDarkColor()
                }));
                setEvents(formattedEvents);
                console.log(events);
            });

            // console.log(moment(data.start).toISOString(), moment(data.end).toISOString())
        } catch (error) {
            console.error("Error fetching events:", error);
        }
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
                    <button className="close" onClick={onClose}>
                        <span aria-hidden="true"><CloseIcon></CloseIcon></span>
                    </button>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        <h3>Events and Invitations</h3>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='dropdown'>
                            <select className='dropdown' onChange={handleCategoryChange} value={category}>
                                {/* ...other options */}
                                <option value="health">Sports</option>
                                <option value="events">Events</option>
                                <option value="meetings">Meetings</option>
                                <option value="post">Post</option>
                            </select>
                            {category === 'post' && (
                                <select className='sub-dropdown' onChange={(e) => setPostSubCategory(e.target.value)} value={postSubCategory}>
                                    <option value="health">Health</option>
                                    <option value="volunteering">Volunteering</option>
                                    <option value="internalevents">Internal Events</option>
                                </select>
                            )}
                            {category === 'health' && <Sports onEventAdded={(event) => onEventAdded(event)} onClose={() => setMopen(false)} />}
                            {category === 'events' && <Events />}
                            {category === 'meetings' && <Meetings />}
                            {category === 'post' && postSubCategory === 'health' && <Health />}
                            {category === 'post' && postSubCategory === 'volunteering' && <Volunteering />}
                            {category === 'post' && postSubCategory === 'internalevents' && <Internalevents/>}
                        </div>
                        {/* ... Render components based on category and sub-category */}
                    </Typography>
                    <div className='ebtn'><button className='ebutton' >Add event</button></div>
                </Box>
            </Modal>
        </div>
    );
};

export default Modale;
