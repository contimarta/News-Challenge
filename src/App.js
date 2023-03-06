import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Body from './components/Body/Body.jsx';
import NewsDetail from './components/NewsDetail/NewsDetail.jsx';
import { fetchNews } from './utils/newsDataService.js';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

//! TO DO LOADING DATA TEXT
function App() {

  const [news, setNews] = useState([]);
  const [error, setError] = useState({});

  //Function to fetch news data from utils/newsDataService.js
  const fetchData = async () => {
    const data = await fetchNews();
    //Use the setTimeout to simulate slow network connection
    //setTimeout(() => {
    // If there is no error property in the return, 
    //set the error state to empty object and data state to the data returned
    if (!data?.error){
      setNews(data);
      setError({});
    }
    //If there is an error property in the return, set the error state to the error returned
    if(data?.error){
      setError(data);
      setNews([]);
    
    }
    //}, 1000);
    }
//Calls the fetchData function once in the first render
    useEffect(() => {
    fetchData();
    },[])

  return (
    <Router>
      <div className="App">
      <Header />
      {Object.keys(error).length > 0 && <h2>No news to display</h2>}
      <div className="container">
        <Routes>
          {Object.keys(error).length === 0 && <Route path="/" element={<Body news={news}/>} />}
          {Object.keys(error).length === 0 &&<Route path="/news/:id" element={ <NewsDetail news={news}/>}/>}
        </Routes>
      </div>
      <Footer />

    </div>
    </Router>
    
  );
}

export default App;
