import { useEffect, useState } from 'react'
 import { NavBar } from './components/NavBar'
import { Card } from './components/Card'

function App() {

      const [news,setNews]=useState([]);

          async function fetchNews(){

              const res=await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=b6e37a974ece438f919ac87dedb9adc0                ")
                   const data=await res.json();
                    console.log(data.articles);
                    setNews(data.articles);   
          }

          useEffect(()=>{
            fetchNews();
          },[])

  return (
    <>
        <NavBar></NavBar>

            <div className='flex flex-wrap justify-between gap-10'>
            {news.map((curr)=>(

<Card title={curr.title} author={curr.author} description={curr.description}
urlToImage={curr.urlToImage} content={curr.content} url={curr.url}
></Card>

))}
            </div>

          
         
       
    </>
  )
}

export default App
