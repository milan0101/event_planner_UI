import React from "react";
import { useRef, useState , useEffect } from "react";
import './calendar.scss';
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  SeeMore,
  PortalWrapper
} from "./Calender.styled";
import Drawer from 'react-modern-drawer';
import { DAYS, MOCKAPPS } from "./conts";
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
  const [currentDate, setCurrentDate] = useState(new Date(2023, 5, 15));
const [events, setEvents] = useState([]);
const dragDateRef = useRef();
const dragindexRef = useRef();
const [showPortal, setShowPortal] = useState(false);
const [portalData, setPortalData] = useState({});
const [feeds, setFeeds] = useState([]);

useEffect(() => {
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
    })
    .catch((error) => console.log(error));
}, []);

// const addEvent = (date, event) => {
//   if (!event.target.classList.contains("StyledEvent")) {
//     const text = window.prompt("name");
//     if (text) {
//       date.setHours(0);
//       date.setSeconds(0);
//       date.setMilliseconds(0);
//       setEvents((prev) => [
//         ...prev,
//         { date, title: text, color: getDarkColor() }
//       ]);
//     }
//   } else {
//     const eventTitle = event.target.innerText;
//     const feedEvent = feeds.find((feed) => feed.post_title === eventTitle);
//     if (feedEvent) {
//       setEvents((prev) => [...prev, { date, title: feedEvent.post_title, color: getDarkColor() }]);
//     }
//   }
// };
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
    setShowPortal(true);
    setPortalData(event);
  };

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  };

  return (
    <div>
      {/* <div><CloseIcon style={{ marginleft: "650px" }} ></CloseIcon></div> */}
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
            <HeadDays className="nonDRAG">{day}</HeadDays>
          ))}
        </SevenColGrid>

        <SevenColGrid
          fullheight={true}
          is28Days={getDaysInMonth(currentDate) === 28}
        >
          {getSortedDays(currentDate).map((day) => (
            <div
              // id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
              onDragEnter={(e) =>
                onDragEnter(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ),
                  e
                )
              }
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={drop}
              // onClick={(e) =>
              //   addEvent(
              //     new Date(
              //       currentDate.getFullYear(),
              //       currentDate.getMonth(),
              //       day
              //     ),
              //     e
              //   )
              // }
            >
              <span
                className={`nonDRAG ${datesAreOnSameDay(
                  new Date(),
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
                  ? "active"
                  : ""
                  }`}
              >
                {day}
              </span>
              <EventWrapper>
                {events.map(
                  (ev, index) =>
                    datesAreOnSameDay(
                      ev.date,
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                      )
                    ) && (
                      <StyledEvent
                        onDragStart={(e) => drag(index, e)}
                        onClick={() => handleOnClickEvent(ev)}
                        draggable
                        className="StyledEvent"
                        id={`${ev.color} ${ev.title}`}
                        key={ev.title}
                        // bgColor={ev.color}
                      >
                        {ev.title ? <div className="dot"></div> : <div></div>}
                      </StyledEvent>
                    )
                )}
              </EventWrapper>
            </div>
          ))}
        </SevenColGrid>
        {showPortal && (
          <Portal
            {...portalData}
            // handleDelete={handleDelete}
            handlePotalClose={handlePotalClose}
          />
        )}
      </Wrapper>
    </div>
  );
};

const EventWrapper = ({ children }) => {
  if (children.filter((child) => child).length)
    return (
      <>
        {children}
        {children.filter((child) => child).length > 2 && (
          <SeeMore
            onClick={(e) => {
              e.stopPropagation();
              console.log("clicked p");
            }}
          >
            see more...
          </SeeMore>
        )}
      </>
    );
};

const Portal = ({ title, date, handleDelete, handlePotalClose }) => {
  return (
    <PortalWrapper>
      <h2>{title}</h2>
      <p>{date.toDateString()}</p>
      {/* <ion-icon onClick={handleDelete} name="trash-outline"></ion-icon> */}
      <ion-icon onClick={handlePotalClose} name="close-outline"></ion-icon>
    </PortalWrapper>
  );
};


export default EventCalendar;