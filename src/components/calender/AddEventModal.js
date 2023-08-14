import React  from 'react';
import { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Modal from 'react-modal';

function AddEventModal({ isOpen, onClose, onEventAdded }) {
    
    const [title, setTitle] = useState("");
    const [start_date, setStart] = useState(new Date());
    const [end_date, setEnd] = useState(new Date());


    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start_date,
            end_date
        })

        onClose();
    }
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <form onSubmit={onSubmit}>
                    <input value={title} onChange={e => setTitle(e.target.value)}></input>

                    <div>
                        <label>start date</label>
                        <Datetime value={start_date} onChange={date => setStart(date)}></Datetime>
                    </div>
                    <div>
                        <label>end date</label>
                        <Datetime value={end_date} onChange={date => setEnd(date)}></Datetime>
                    </div>
                    <button >Add event</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddEventModal