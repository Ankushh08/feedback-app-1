import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react/cjs/react.development';
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackItem({ item}) {
    const { handleDelete } = useContext(FeedbackContext)
    return (
        <Card>

            <div className="num-display">{item.rating}</div>
            <button className="close"
                onClick={() => handleDelete(item.id)}>
                <FaTimes />
            </button>

            <div className="text-display">
                {item.text}

            </div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;