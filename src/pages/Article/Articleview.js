
import "../Article/Article.css"
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Articleview.css'


function  Articleview(props){

    

return(
    <div className="articleview_ParentDiv">
     
     
      <div class="articleview-container">
      <div className="articleview_head"><h2 >{props.title}</h2></div>
         <div className ='articleview_image' > </div>
         <div className='article_view_content'>
         <p>{props.content}</p>
         </div>
         
           </div>
    </div>
    
  );
}

export default  Articleview; 

