import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';
import { apiurl } from "../config/apiUrl";

function Calendar({ onClose }) {
  const [mopen, setMopen] = useState(false);
  const [events, setEvents] = useState([]);
  const [feeds, setFeeds] = useState();
  const [open, setOpen] = useState(false);
  const calendarRef = useRef();

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


  const handleAddEventClick = () => {
    setMopen(true); // Open the modal
    onClose(); // Close the drawer
  };

  async function handleDateSet() {
    try {
      
      const start = calendarRef.current.getApi().view.currentStart;
      const end = calendarRef.current.getApi().view.currentEnd;

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



  useEffect(() => {

    // Fetch events when the component mounts
    handleDateSet();
  }, []);



  return (
    <>
      <button onClick={handleAddEventClick}>Add event</button>

      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events} // Pass events to the FullCalendar
          eventAdd={(event) => onEventAdded(event)}
          datesSet={() => handleDateSet()} // No need to pass the date, as we're fetching events in this function
          height={580}
          contentHeight={800}
        />
      </div>
      <AddEventModal isOpen={mopen} onClose={() => setMopen(false)} onEventAdded={(event) => onEventAdded(event)} />
    </>
  );
}

export default Calendar;
