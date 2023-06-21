import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Drawer from "../common"
import Upcoming from '../Upcoming/Upcoming';


const EventsDrawer = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [resolve, setResolve] = useState();
  
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
      <Drawer open={open} onClose={closeDrawer}
      direction="right"
      >
        <div>
          <Upcoming></Upcoming>
        </div>
      </Drawer>
    );
  });
  
  export default EventsDrawer;
  