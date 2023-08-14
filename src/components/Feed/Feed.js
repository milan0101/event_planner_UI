// import React, { useState, useEffect } from 'react';
// import smartcrop from 'smartcrop';
// import axios from 'axios';
// import { apiurl } from '../config/apiUrl';
// import './Feed.css';
// import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
// import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

// function Feeds() {
//   const [feeds, setFeeds] = useState([]);

//   useEffect(() => {
//     axios
//       .get(apiurl.getContent)
//       .then((response) => {
//         setFeeds(response.data);
//         console.log(feeds);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   // useEffect(() => {
//   //   const cropImages = async () => {
//   //     for (let i = 0; i < feeds.length; i++) {
//   //       const feed = feeds[i];
//   //       const image = new Image();
//   //       image.src = feed.post_img;
//   //       const targetWidth = 300; // Specify the desired width of the resized image
//   //       const targetHeight = 200; // Specify the desired height of the resized image

//   //       try {
//   //         const result = await smartcrop.crop(image, { width: targetWidth, height: targetHeight });
//   //         const crop = result.topCrop;
//   //         const canvas = document.createElement('canvas');
//   //         const ctx = canvas.getContext('2d');
//   //         canvas.width = targetWidth;
//   //         canvas.height = targetHeight;
//   //         ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, targetWidth, targetHeight);
//   //         const croppedUrl = canvas.toDataURL(); // Get the cropped image as a data URL

//   //         // Update the feeds state with the cropped image URL
//   //         setFeeds((prevFeeds) => {
//   //           const updatedFeeds = [...prevFeeds];
//   //           updatedFeeds[i].post_img = croppedUrl;
//   //           return updatedFeeds;
//   //         });
//   //       } catch (error) {
//   //         console.log(`Error cropping image: ${error}`);
//   //       }
//   //     }
//   //   };

//   //   if (feeds.length > 0) {
//   //     cropImages();
//   //   }
//   // }, [feeds]);

//   return (
//     <div className="fb">
//       {/* {feeds &&
//         feeds.map((feed) => (
//           <div key={feed.id}>
//             <div className="fcontent">
//               <h2>{feed.post_title}</h2>
//               <h3>{feed.post_summary}</h3>
//               <img src={feed.post_img} className="post" alt="Post Image" />
//               <div className='like'>
//               <div className='icons'>
//                 <ThumbUpRoundedIcon className='uicons'></ThumbUpRoundedIcon>
//                 <CommentRoundedIcon className='cicon'></CommentRoundedIcon>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))} */}
//         <div>post</div>
//     </div>
//   );
// }

// export default Feeds;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurl } from '../config/apiUrl';
import './Feed.css';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    // Fetch feed data from your API
    axios
      .get(apiurl.getContent)
      .then((response) => {
        setFeeds(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="fb">
      {feeds.map((feed, index) => (
        <div key={index} className="post">
          <img src={`${apiurl.getUploadedImage}/${feed.uploadId}`} alt="Uploaded" />
          <div className="post-content">
            <p>{feed.content}</p>
            {/* Render other post details here */}
          </div>
          <div className="post-actions">
            <ThumbUpRoundedIcon /> {/* Render like button */}
            <CommentRoundedIcon /> {/* Render comment button */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feeds;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Feed.css';
// import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
// import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

// function Feeds() {
//   const [feeds, setFeeds] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/events')
//       .then((response) => {
//         const fetchedFeeds = response.data;

//         // Fetch images for each event
//         const fetchImages = async () => {
//           const feedsWithImages = await Promise.all(
//             fetchedFeeds.map(async (feed) => {
//               if (feed.post_img) {
//                 const imageResponse = await axios.get(`http://localhost:8000/image/${feed.post_img}`);
//                 feed.imageData = imageResponse.data;
//               }
//               return feed;
//             })
//           );
//           setFeeds(feedsWithImages);
//         };

//         fetchImages();
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="fb">
//       {feeds.map((feed, index) => (
//         <div key={index} className="post">
//           {feed.imageData && <img src={`data:image/jpeg;base64,${feed.imageData}`} alt="Uploaded" />}
//           <div className="post-content">
//             <p>{feed.post_summary}</p>
//           </div>
//           <div className="post-actions">
//             <ThumbUpRoundedIcon /> {/* Render like button */}
//             <CommentRoundedIcon /> {/* Render comment button */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Feeds;
