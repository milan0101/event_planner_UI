import React, { useRef, useState, useEffect } from "react";
// import './calendar.scss
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  SeeMore,
  PortalWrapper
} from "./Calender.styled";
import { DAYS } from "./conts";
import {
  datesAreOnSameDay,
  getDarkColor,
  getDaysInMonth,
  getMonthYear,
  getSortedDays,
  nextMonth,
  prevMonth,
  range,
  sortDays
} from "./utils";
import { apiurl } from "../config/apiUrl";
import axios from "axios";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [feeds, setFeeds] = useState();
  const dragDateRef = useRef();
  const dragindexRef = useRef();
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});
  // const [highlightedDate, setHighlightedDate] = useState(null);
  // const filteredEvents = events.filter((ev) => ev.date && portalData.date && ev.date.getTime() === portalData.date.getTime());
  const filteredEvents = events.filter((ev) => ev.date && portalData.date && ev.date.getTime() === portalData.date.getTime());


  useEffect(() => {
    setCurrentDate(new Date()); // Set the current date when the component mounts
    axios
      .get(apiurl.getContent)
      .then((response) => {
        setFeeds(response.data);
        const formattedEvents = response.data.map((feed) => ({
          date: new Date(feed.post_date),
          title: feed.post_title,
          color: getDarkColor()
        }));
        setEvents(formattedEvents);
        console.log(events);
      })
      .catch((error) => console.log(error));
  }, []);

  const drag = (index, e) => {
    dragindexRef.current = { index, target: e.target };
  };

  const onDragEnter = (date, e) => {
    e.preventDefault();
    dragDateRef.current = { date, target: e.target.id };
  };

  const drop = (ev) => {
    ev.preventDefault();

    setEvents((prev) =>
      prev.map((ev, index) => {
        if (index === dragindexRef.current.index) {
          ev.date = dragDateRef.current.date;
        }
        return ev;
      })
    );
  };

  const handleOnClickEvent = (event) => {
    console.log(event);
    setShowPortal(true);
    setPortalData(event);
    // setHighlightedDate(event.date);
  };

  const handlePotalClose = () => {
    setShowPortal(false);
    // setHighlightedDate(null);
  };


  const handleDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  };

  if (currentDate === null) {//
    return null; // Render nothing until the current date is 
  }

  return (
    <div>
      <Wrapper>
        <DateControls>
          <ion-icon
            onClick={() => prevMonth(currentDate, setCurrentDate)}
            name="arrow-back-circle-outline"
          ></ion-icon>
          {getMonthYear(currentDate)}
          <ion-icon
            onClick={() => nextMonth(currentDate, setCurrentDate)}
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </DateControls>
        <SevenColGrid>
          {DAYS.map((day) => (
            <HeadDays className="nonDRAG" key={day}>{day}</HeadDays>
          ))}
        </SevenColGrid>


        <SevenColGrid fullheight={true} is28Days={getDaysInMonth(currentDate) === 28}>
          {getSortedDays(currentDate).map((day) => (
            <div
              key={day}
              onDragEnter={(e) =>
                onDragEnter(
                  new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
                  e
                )
              }
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={drop}
            >
              <span
                className={`nonDRAG ${datesAreOnSameDay(
                  new Date(),
                  new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                )
                  ? "active"
                  : ""
                  }`}
              >
                {day}
              </span>
              <EventWrapper handleOnClickEvent={handleOnClickEvent}>
                {events.map(
                  (ev, index) =>
                    datesAreOnSameDay(
                      ev.date,
                      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                    ) && (
                      <StyledEvent
                        // onDragStart={(e) => drag(index, e)}
                        onClick={() => handleOnClickEvent(ev)}

                        // className={`StyledEvent ${datesAreOnSameDay(
                        //   ev.date,
                        //   // highlightedDate
                        // ) ? "highlighted" : ""}`}
                        // id={`${ev.color} ${ev.title}`}
                        key={ev.title}
                      >
                        {/* {ev.title ? <div className="dot"></div> : <div></div>} */}
                      </StyledEvent>
                    )
                )}
              </EventWrapper>
            </div>
          ))}
        </SevenColGrid>
      </Wrapper>
      {showPortal && (
        <Portal
          title={portalData.title}
          date={portalData.date}
          events={filteredEvents} // Use the filteredEvents array
          handleDelete={handleDelete}
          handlePortalClose={handlePotalClose}
        />
      )}

    </div>
  );
};

const EventWrapper = ({ children, handleOnClickEvent }) => {
  const eventCount = children.filter((child) => child).length;
  const dotColor = eventCount > 0 ? (eventCount > 1 ? "blue" : "red") : "";

  return (
    <>
      {eventCount > 0 && (
        <div>
          {/* <div onClick={handleOnClickEvent} >

          </div> */}
          <div  className="dot" style={{ cursor: "pointer", backgroundColor: dotColor, width:"10px", height:"10px",marginLeft:"48px", borderRadius:"10px"}} > 
            {children}
          </div>
        </div>
      )}

    </>
  );
};

const Portal = ({ title, date, events, handleDelete, handlePortalClose }) => {
  const dateStr = date ? date.toDateString() : '';
  console.log(events, "events");

  return (
    <PortalWrapper>
      {/* <h2>{title}</h2> */}
      <p>{dateStr}</p>
      {events.map((event, index) => (
        <div key={index}><h4>{event.title}</h4><h5>{event.time}</h5></div>
      ))}
      <ion-icon onClick={handlePortalClose} name="close-outline"></ion-icon>
      <div>Number of events: {events.length}</div> {/* Add this line to check the number of events */}
    </PortalWrapper>
  );
};


export default EventCalendar;
