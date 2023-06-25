
import "./Video.css"
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPopup from "./VideoPopup";




function  Video(){
    
const [videos, setVideos] = useState([]);
const [url,setUrl]=useState('')
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: 'eye diseases',
              maxResults: 30,
              key: ' AIzaSyCi3gTNieuZWAnv8li_H_QBSTktbw8i8dM', 
            },
          }
        );
        console.log(response.data.items)
        setVideos(response.data.items);
      } catch (error) {
        console.log('Error fetching YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);
  const playVideo = (videoId) => {
    setUrl(videoId);
  };
  const closeVideoPopup = () => {
    setUrl(null);
  };
      
 

return(
    <div className="video_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="video_banner">
     <div className="welcometext">
     <h1 className="h1">Videos</h1>

     </div>
     <div className="video_boxes">
     {videos.map((video)=>( 
        <div className="vid_box_1" key={video.id.videoId} >
       
            <div className="vid_img" onClick={() => playVideo(`https://www.youtube.com/watch?v=${video.id.videoId}`)}>
                <img className="sizing_image" src={video.snippet.thumbnails.default.url}
               
                  alt={video.snippet.title}/>     
            </div>
            <div className="vid_desc" >
                <p className="video_title">{video.snippet.title}</p>
                <p className="channel_title">{video.snippet.channelTitle}</p>
                <p className="published">published at {video.snippet.publishedAt}</p>
            </div>
          
        </div>
        ))}
         {url && (
        <VideoPopup
          parameter={url}
          onClose={closeVideoPopup}
        />
      )}
      
        
      
      

    
     </div>
     </div>
    </div>
    
  );
}

export default  Video; 

