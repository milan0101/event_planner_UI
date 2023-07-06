import React, { useState, useEffect } from 'react';
import smartcrop from 'smartcrop';
import axios from 'axios';
import { apiurl } from '../config/apiUrl';
import './Feed.scss';

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios
      .get(apiurl.getContent)
      .then((response) => {
        setFeeds(response.data);
        console.log(feeds);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   const cropImages = async () => {
  //     for (let i = 0; i < feeds.length; i++) {
  //       const feed = feeds[i];
  //       const image = new Image();
  //       image.src = feed.post_img;
  //       const targetWidth = 300; // Specify the desired width of the resized image
  //       const targetHeight = 200; // Specify the desired height of the resized image

  //       try {
  //         const result = await smartcrop.crop(image, { width: targetWidth, height: targetHeight });
  //         const crop = result.topCrop;
  //         const canvas = document.createElement('canvas');
  //         const ctx = canvas.getContext('2d');
  //         canvas.width = targetWidth;
  //         canvas.height = targetHeight;
  //         ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, targetWidth, targetHeight);
  //         const croppedUrl = canvas.toDataURL(); // Get the cropped image as a data URL

  //         // Update the feeds state with the cropped image URL
  //         setFeeds((prevFeeds) => {
  //           const updatedFeeds = [...prevFeeds];
  //           updatedFeeds[i].post_img = croppedUrl;
  //           return updatedFeeds;
  //         });
  //       } catch (error) {
  //         console.log(`Error cropping image: ${error}`);
  //       }
  //     }
  //   };

  //   if (feeds.length > 0) {
  //     cropImages();
  //   }
  // }, [feeds]);

  return (
    <div className="fb">
      {feeds &&
        feeds.map((feed) => (
          <div key={feed.id}>
            <div className="fcontent">
              <h2>{feed.post_title}</h2>
              <h3>{feed.post_summary}</h3>
              <img src={feed.post_img} className="post" alt="Post Image" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feeds;
