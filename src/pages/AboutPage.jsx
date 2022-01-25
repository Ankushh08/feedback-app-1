import { Link } from 'react-router-dom';
import Card from '../Components/shared/Card'

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p><Link to = '/'>Wapas Chalo</Link></p>
            </div>
        </Card>
    );
}

export default AboutPage;