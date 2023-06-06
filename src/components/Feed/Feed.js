import React, { useEffect, useState } from 'react';
import './Feed.scss';
import axios from 'axios';

function Feeds() {

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    console.log(feeds);
    axios.get('http://localhost:8000/events').then(response => {
      setFeeds(response.data);
    }).catch(error => console.log(error));
  }, []);
  return (
    <div className='fb'>
      {
        feeds && feeds.map((feeds) => (
          <div key={feeds.id}>
            <div className='fcontent'>
              <h2>{feeds.title}</h2>
            </div>

          </div>
        ))
      }

    </div>

  )
}

export default Feeds