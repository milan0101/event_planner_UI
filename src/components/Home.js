import React from 'react';
import Navbar from './Navbar';
// import './home.scss';
import Content from './content/Content';
function Home() {
  
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  )
}

export default Home