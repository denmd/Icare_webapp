import ReactPlayer from "react-player";
import "./VideoPopup.css";
import {ReactComponent as Closeicon}  from "../../logos/closeicon.svg";

const VideoPopup = ( props ) => {
  return (
    <div className="video-popup-overlay">
      <div className="video-popup-content">
        <span onClick={props.onClose}> <Closeicon></Closeicon></span>
        
        <div className="video-popup-player">
      
                    <ReactPlayer
                      url={props.parameter}
                      controls
                      className="react-player"
                      playing
                    />
                  </div>
               
        </div>
      </div>
   
  );
};

export default VideoPopup;
