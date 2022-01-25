import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackStats = () => {


    const {feedback} = useContext(FeedbackContext); 

    let reviews = feedback.length, avgRating = 0;

    for(let i = 0; i < reviews; i++){
        avgRating = avgRating + feedback[i].rating; 
    }

    avgRating = avgRating / reviews; 
    if(isNaN(avgRating)){
        avgRating = 0; 
    }
    avgRating = avgRating.toFixed(1); 
    return (  
        <div className="feedback-stats">
          <h4>{reviews}</h4>
          <h4>Average Rating: {avgRating}</h4>
        </div>
    );
}
 


export default FeedbackStats;