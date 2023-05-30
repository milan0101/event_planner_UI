import React from 'react';
import './content.scss';
import Upcoming from '../Upcoming/Upcoming';
import Calender from '../calender/Calender';
import Feeds from '../Feed/Feed';
import { useEffect } from 'react';
import Bcalender from '../calender/Bcalender';

function Content() {
    useEffect(() => {
      const handleScroll = (e) => {
        console.log(e)
        const calendar = document.getElementById('calen');
        const upcoming = document.getElementById('upcome');
        const scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > 0) {
          calendar.classList.add('hide');
          upcoming.classList.add('hide');
        } 
        else if(scrollPosition > 10){
          calendar.classList.add('hide')
        }
        else {
          calendar.classList.remove('hide');
          upcoming.classList.remove('hide');
        }
        console.log('scrool', calendar, upcoming);
      };
      console.log('hello');
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className='main'>
        <div id='calen'>
          {/* <Calender /> */}
          <Bcalender></Bcalender>
        </div>
        <Feeds />
        <div id='upcome'>
          <Upcoming />
        </div>
      </div>
    );
  }
  
  export default Content;
  