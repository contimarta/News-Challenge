import { useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import "./NewsDetail.css"

const NewsDetail = (props) => {
    const {news} = props

//Reminder: The id parameter I've used is the index of the news element in the array, not the id given by the API.
    const {id} = useParams();
    const newsData = news[id]

//Modify the text so that there is a line break after each stop.
    let text = newsData.fields.bodyText;
    text = text.replaceAll(". ", ".\n")

//In the first render of the NewsDetail component, we want to be at the top of the page.
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])


    return (
        <div className="newsBody">
            
            <img src={newsData.fields.thumbnail} alt={newsData.fields.headline}/>
            {/* Opens the news story in The Guardian website in another tab. */}
            <Link target="_blank" rel="noopener noreferrer" to={newsData.webUrl}><h2>{newsData.fields.headline}</h2></Link>
            <p className="newsText">{text}</p>
        </div>
    )
}

export default NewsDetail;