import React, { useState } from 'react';
import './modal.css';
import Health from '../categories/Sports';
import Volunteer from '../categories/Events';
import Meetings from '../categories/Meetings';
import Internalevents from '../categories/Internalevents';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';

const MyModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState('meetings');
    const { open, onClose } = props;
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }


    return (
        <div className='modbody'>
             <button onClick={closeModal}>Close</button>
            <button onClick={openModal}>Open Modal</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Modal Title</h2>
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
                       
                    </div>
                </div>
            )}

        </div >
    );
};

export default MyModal;
