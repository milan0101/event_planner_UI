import React from 'react';
import { useState } from 'react';


function Toggle(props) {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        debugger
      setIsToggled((prevState) => !prevState);
    props.handleToggleCalendar(isToggled);
    };
  
    return (
      <button style={{ height:50}}onClick={handleToggle}>
        {isToggled ? 'Show Calendar' : 'Hide Calendar'}
      </button>
    );
}

export default Toggle