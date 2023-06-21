import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import Signin from './components/Signin';
import Signup from './components/Signup';
import EventCalendar from './components/calender/Bcalender';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path='/calendar' element={<EventCalendar></EventCalendar>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
