import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
    return (
        <div className="about-link1">
            <Link to="/about">
                <FaQuestion size={30} />
            </Link>
        </div>
    );
}

export default AboutIconLink;