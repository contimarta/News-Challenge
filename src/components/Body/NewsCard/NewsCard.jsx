import { Link } from "react-router-dom";
import "./NewsCard.css"

const NewsCard = ({id,news})=> {

    const {fields} = news;
    
    return(
        <div className="newsCard">
        
            <Link to={`/news/${id}`}>
                <img src={fields.thumbnail} alt={fields.headline}/>
                <h2> {fields.headline}</h2> 
            </Link>
        </div>
   
    )
}

export default NewsCard;