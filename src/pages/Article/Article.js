
import "../Article/Article.css"
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function  Article(){

    const [articles, setArticles] = useState([]);
    useEffect(() => {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(
            'https://newsapi.org/v2/everything',
            {
              params: {
                q: 'eye disease',
                apiKey: 'f87b0b64324e4038976401cc4b8d7b44',
                pageSize: 20,
              },
            }
          );
          setArticles(response.data.articles);
          console.log(response.data.articles)
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
  
      fetchArticle();
    }, []);
   

return(
    <div className="article_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
     
      <div class="article-container">
      <div className="article_head"><h2 >Articles</h2></div>
      {articles.map((arti) => (
        
        <div class="articles" >
            <h3>{arti.publishedAt}</h3>
            <h2>{arti.author}</h2>
            <br/>
            <div><h1>{arti.title} </h1></div>
         
         <p>{arti.description}</p>
         <a href={arti.url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read More
          </a>
        </div>
        ))}
    
           </div>
    </div>
    
  );
}

export default  Article; 

