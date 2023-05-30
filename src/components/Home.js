import React from 'react';
import Navbar from './Navbar';
import Calender from './calender/Calender';

import Event from './events/Event';
import './home.scss';
import Upcoming from './Upcoming/Upcoming';
import Content from './content/Content';
function Home() {

  // let sidebar = document.getElementsByClassName("sidebar")[0];
  // let sidebar_content = document.getElementsByClassName("content-wrapper")[0];
  // window.onscroll = () => {
  //   let scrollTop = window.scrollY; // current scroll position
  //   let viewportHeight = window.innerHeight; //viewport height
  //   let contentHeight = sidebar_content.getBoundingClientRect().height; // current content height
  //   let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset; //distance from top to sidebar

  
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  )
}

export default Home