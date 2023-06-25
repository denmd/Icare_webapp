
import "../News/News.css"
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function  News(){
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything',
          {
            params: {
              q: 'eye diseases',
              sources: 'healthline,fox-news,bbc-news,cnn,abc-news',
              apiKey: 'f87b0b64324e4038976401cc4b8d7b44',
              pageSize: 30,
            },
          }
        );
        setNews(response.data.articles);
        console.log(response.data.articles)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
return(
    <div className="news_ParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="news_banner">
        <h2>News</h2>

    <div class="news-container">
{news.map((newses)=>(
        <div class="news_desc">
          <div>
           <h1>{newses.title}</h1>
            <h2>{newses.source.name}</h2>
           <br/>
         <p> {newses.description} </p>
         </div>
          <div className="read-more_nw">
          <a href={newses.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          </div>
          </div>
        
   ))}
   
     
       
     </div>
     </div>
    </div>
    
  );
}

export default  News; 

