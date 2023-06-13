import '../Restype/Restype.css'
import Header from '../../components/Header';
import {ReactComponent as NewsIcon }  from "../../logos/news.svg";
import {ReactComponent as ArticleIcon}  from "../../logos/article.svg";
import {ReactComponent as VideoIcon }  from "../../logos/video-player.svg";
import { useNavigate } from 'react-router-dom';

function  Restype(){
  const navigate=useNavigate()
  const DirectNewspage=()=>{
    navigate('/news')
  }
  const Directvideopage=()=>{
    navigate('/video')
  }
  const Directarticlepage=()=>{
    navigate('/article')
  }

return(
    <div className="res_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="restype_banner">
     <div className="headline">
     <h1 className="h1">Educational Resources</h1>
     </div>
     <div className="res_boxes">
      <button className="box1"  onClick={DirectNewspage}>
       <div className="newsimg"><span ><NewsIcon></NewsIcon></span></div> 
        <div className="news"><span>News</span></div>
        </button>
      <button className="box2" onClick={Directarticlepage}>
      <div className="articleimg"><span ><ArticleIcon></ArticleIcon></span></div> 
        <div className="article"><span>Articles</span></div>
      </button>
      <button className="box3" onClick={Directvideopage}>
      <div className="videoimg"><span ><VideoIcon></VideoIcon></span></div> 
      <div className="video"><span>Videos</span></div>
      </button>
    
      
     </div>
     </div>
    </div>
    
  );
}

export default Restype;