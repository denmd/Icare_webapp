
import "../News/News.css"
import Header from "../../components/Header";

function  News(){

return(
    <div className="news_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="news_banner">
        <h2>News</h2>
    <div class="news-container">
        <div class="news_desc">
            <h2>The Hindu</h2>
         <p> Dry eye disease is increasing due to a steep rise-
            in use of digital devices </p>
           
        </div>
        <div class="news_desc">
            <h2>The Financial Express</h2>
            <p> ENTOD Pharmaceuticals launches drops for-
                inflammatory dry eye disease </p>
           </div>
        <div class="news_desc">
            <h2>HCP Live</h2>
            <p> Procedural Therapies for Dry Eye Disease</p>
           </div>
           <div class="news_desc">
            <h2>The Health Site</h2>
            <p> Gendered Burden Of Eye Diseases</p>
           </div>
     </div>
     </div>
    </div>
    
  );
}

export default  News; 

