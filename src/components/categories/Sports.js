// import React from 'react';
// import { useState, useEffect } from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import Datetime from 'react-datetime';
// import "react-datetime/css/react-datetime.css";
// // import '../common/modal.scss';
// import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';

// function Health({ onClose, onEventAdded }) {

//     const [title, setTitle] = useState("");
//     const [start_date, setStart] = useState(new Date());
//     const [end_date, setEnd] = useState(new Date())

//     const onSubmit = (event) => {
//         event.preventDefault();

//         onEventAdded({
//             title,
//             start_date,
//             end_date
//         })

//         onClose();
//     }




//     return (
//         <div className='hbody'>
//             <h2>Health</h2>
//             <form onSubmit={onSubmit}>
//                 <input value={title} onChange={e => setTitle(e.target.value)}></input>

//                 <div>
//                     <label>start date</label>
//                     <Datetime value={start_date} onChange={date => setStart(date)}></Datetime>
//                 </div>
//                 <div>
//                     <label>end date</label>
//                     <Datetime value={end_date} onChange={date => setEnd(date)}></Datetime>
//                 </div>
//                 <button>Add event</button>
//             </form>
//             {/* <div className='etitle'>
//                 <h4>Event Title :</h4>
//                 <input className='einput'></input>

//             </div>

//             <div className='etitle'>
//                 <h4>Event Description:</h4>
//                 <input className='einput'></input>
//             </div>
//             <div className='etitle'>
//                 <h4>Event Date :</h4>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DateRangePicker className='drange' />
//                 </LocalizationProvider>
//             </div>
//             <div className='etitle'>
//                 <h4 >Event Time :</h4>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <MultiInputTimeRangeField
//                         slotProps={{
//                             textField: ({ position }) => ({
//                                 label: position === 'start' ? 'From' : 'To',
//                             }),
//                         }}
//                         className='drange'
//                     />
//                 </LocalizationProvider>
//             </div> */}
//             <div className='etitle'>
//                 <h4>Add people :</h4>
//                 <input className='einput'></input>
//             </div>
//         </div>
//     )
// }

// export default Health




import React, { useState } from 'react';
import Datetime from 'react-datetime';
import axios from 'axios';
import "react-datetime/css/react-datetime.css";
import './sports.css';
import { apiurl } from '../config/apiUrl';

function Sports({ onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);


    const [start_date, setStart] = useState(new Date());
    const [end_date, setEnd] = useState(new Date())

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            await axios.post('http://localhost:8000/upload', formData); // Replace with your server URL
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }



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
            <h2>Sports</h2>
            <form onSubmit={onSubmit}>
                {/* <input value={title} onChange={(e) => setTitle(e.target.value)}></input> */}
                <div className='etitle'>
                    <h4>Event Title :</h4>
                    <input className='einput' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input type='file' onChange={handleFileChange}></input>
                    <button className='ubtn' onClick={handleUpload}>upload</button>
                </div>
                <div className='etitle'>
                    <h4>Event Description :</h4>
                    <input className='einput'></input>

                </div>
                <div className='etitle'>
                    <h4>Event start date :</h4>
                    {/* <input className='einput'></input> */}
                    <Datetime value={start_date} onChange={date => setStart(date)} className="form-control"></Datetime>

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

export default Sports;
