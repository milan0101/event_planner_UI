import React, { useEffect, useState } from 'react';
import './Feed.scss';
import axios from 'axios';
import { apiurl } from '../config/apiUrl';

function Feeds() {

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    // debugger
    axios.get(apiurl.getContent).then(response => {
      setFeeds(response.data);
      console.log(feeds)
    }).catch(error => console.log(error));
  }, []);
  return (
    <div className='fb'>
      {
        feeds && feeds.map((feeds) => (
          <div >
            <div className='fcontent'>
              <h2>{feeds.post_title}</h2>
              <h3>{feeds.post_summary}</h3>
            </div>

          </div>
        ))
      }

    </div>

  )
}

export default Feeds