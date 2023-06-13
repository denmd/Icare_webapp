
import "./Video.css"
import Header from "../../components/Header";

function  Video(){

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
        <div className="vid_box_1">
            <div className="vid_img"></div>
            <div className="vid_desc">
                <p>Description</p>
                <p>link</p>
                <p>date</p>
            </div>
        
            
        </div>
        <div className="vid_box_2">
        <div className="vid_img"></div>
            <div className="vid_desc">
                <p>Description</p>
                <p>link</p>
                <p>date</p>
            </div>
            
        </div>
        <div className="vid_box_3">
        <div className="vid_img"></div>
            <div className="vid_desc">
                <p>Description</p>
                <p>link</p>
                <p>date</p>
            </div>
            
        </div>
      
      

    
     </div>
     </div>
    </div>
    
  );
}

export default  Video; 

