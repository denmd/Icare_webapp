
import "../Article/Article.css"
import Header from "../../components/Header";


function  Article(){

return(
    <div className="article_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
     
      <div class="article-container">
      <div className="article_head"><h2 >Articles</h2></div>
        
        <div class="articles">
            <h1>19/12/2022</h1>
            <h2>CDC</h2>
         <p>Common Eye Disorders and Diseases </p>
           
        </div>
        <div class="articles">
            <h1>14/01/2021</h1>
            <h2>Cleveland Clinic</h2>
            <p>Common Eye Diseases and Vision Problem </p>
           </div>
        <div class="articles">
            <h1>09/11/2016</h1>
            <h2>MedlinePlus</h2>
            <p>Eye Diseases|Glaucoma</p>
           </div>
        <div class="articles">
            <h1 >15/10/2022</h1>
            <h2>WebMD</h2>
            <p>Top Causes of eye problems</p>
           </div>
         <div class="articles">
            <h1 >01/08/2018</h1>
            <h2>AAO</h2>
            <p>Dry Eye Disease</p>
           </div>
           </div>
    </div>
    
  );
}

export default  Article; 

