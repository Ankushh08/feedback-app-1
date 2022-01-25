import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const handleDelete = (id) => {
        console.log('delete was clicked for', id);
        setFeedback(
            feedback.filter((feed) => {
                return feed.id !== id;
            }));
    }
    const handleAdd = (newForm) => {
        newForm.id = uuidv4();
        // console.log(newForm);
        setFeedback([newForm, ...feedback])
    }
    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                handleDelete,
                handleAdd
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext; 