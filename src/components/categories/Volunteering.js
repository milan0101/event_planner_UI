import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './sports.css';

function Volunteering({ onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    const [start_date, setStart] = useState(new Date());
    const [end_date, setEnd] = useState(new Date())

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            // Call the onEventAdded prop to add the event
            await onEventAdded({
                title,
                start_date,
                end_date,
            });

            // Close the modal after the event is successfully added
            onClose();
        } catch (error) {
            console.error("Error adding event:", error);
            // You may want to handle error cases here
        }
    };




    return (
        <div className='hbody'>
            <h2>Volunteering</h2>
            <form onSubmit={onSubmit}>
                {/* <input value={title} onChange={(e) => setTitle(e.target.value)}></input> */}
                <div className='etitle'>
                    <h4>Event Title :</h4>
                    <input className='einput' value={title} onChange={(e) => setTitle(e.target.value)}></input>

                </div>
                <div className='etitle'>
                    <h4>Event Description :</h4>
                    <input className='einput'></input>

                </div>
                <div className='etitle'>
                    <h4>Event start date :</h4>
                    {/* <input className='einput'></input> */}
                    <Datetime value={start_date}  onChange={date => setStart(date)} className="form-control"></Datetime>

                </div>
              
                <div className='etitle'>
                <h4> Event end date:</h4>
                    {/* <input className='einput'></input> */}
                    <Datetime value={end_date} onChange={date => setEnd(date)}></Datetime>
                </div>
                
                
                {/* Display the selected date for reference */}
                {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
                <button>Add event</button>
            </form>
        </div>
    );
}

export default Volunteering;
