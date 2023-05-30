import React , { useState }from 'react';
import './Calender.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import CloseIcon from '@mui/icons-material/Close';

function Calender() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className='cbody'>
      <Calendar></Calendar>

    </div>
  )
}

export default Calender