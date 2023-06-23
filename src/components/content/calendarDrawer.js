import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Drawer from "../common"

import EventCalendar from '../calender/Bcalender';


const CalendarDrawer = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [resolve, setResolve] = useState();
    const [value, onChange] = useState(new Date());
  
    const showDrawer = () => {
      setOpen(true);
      return new Promise((res) => {
        setResolve(() => res);
      });
    };
  
    const closeDrawer = () => {
      setOpen(false);
      resolve();
    };
  
    useImperativeHandle(ref, () => ({
      showDrawer: showDrawer
    }));
  
    return (
      <Drawer open={open} onClose={closeDrawer}>
        <div>
          <EventCalendar />
        </div>
      </Drawer>
    );
  });
  
  export default CalendarDrawer;
  