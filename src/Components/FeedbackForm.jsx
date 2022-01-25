import { useContext, useState } from "react/cjs/react.development";
import FeedbackContext from "../Context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
    const myHeading = "We would love to hear you out...";
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);


    const {handleAdd} = useContext(FeedbackContext); 

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text.length && text.length <= 10) {
            const cm = "10 se bada kar";
            setMessage(cm);
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const select = (rating) => {
        setRating(rating); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            // console.log(newFeedback);
            handleAdd(newFeedback); 

            setText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>{myHeading}</h2>
                <RatingSelect select={select} />
                <div className="input-group">
                    <input type="text" placeholder="write a review" onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={btnDisabled} version="primary">submit</Button>
                </div>
                {message && <div>{message}</div>}
            </form>
        </Card >

    );
}

export default FeedbackForm;