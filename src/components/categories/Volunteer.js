import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import '../common/modal.scss';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
// import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro/MultiInputDateRangeField';


function Volunteer() {
    return (
        <div className='vbody'>
             <h2>Volunteering</h2>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker className='drange' />
                </LocalizationProvider>
            </div>
            <div className='etitle'>
                <h4 >Event Time :</h4>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MultiInputTimeRangeField
                        slotProps={{
                            textField: ({ position }) => ({
                                label: position === 'start' ? 'From' : 'To',
                            }),
                        }}
                        className='drange'
                    />
                </LocalizationProvider>
            </div>
            <div className='etitle'>
                <h4>Add people :</h4>
                <input className='einput'></input>
            </div>
        </div>
    )
}

export default Volunteer