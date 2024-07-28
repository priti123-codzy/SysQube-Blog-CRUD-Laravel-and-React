import { useEffect, useState } from "react";

const apiKey = 'd699a60d58f74c1a89d602c524e67c12';
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Function to fetch news data


// Function to display news articles
 const News = () =>{
    async function fetchNews() {
        try {
          const response = await fetch(newsUrl);
          const data = await response.json();
      
          if (data.articles) {
            setNews(data.articles);
          } else {
            console.error('No articles found in response:', data);
          }
        } catch (error) {
          console.error('Error fetching news data:', error);
        }
      }

    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetchNews();
    },[])

    return <div className=""></div>

 }


 export default News;