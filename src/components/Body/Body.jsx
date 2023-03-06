import NewsCard from "./NewsCard/NewsCard.jsx"
import "./Body.css"

function Body(props) {
    const { news } = props;
//I need to add id as a prop to the NewsCard component so that I can use the index of the news element in the array as 
//a parameter in the url, instead of the id given by the API.
    const newsList = news.map((news, index) => <NewsCard key={news.id} id={index} news={news}/>);

    return(
    <div className="newsList"> 
        {news.length === 0 && <h2>News are loading...</h2>}
        {news.length>0 && newsList} 
    </div>)
}

export default Body;