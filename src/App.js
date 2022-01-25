import { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
// import FeedbackData from './data/FeedbackData'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from './Context/FeedbackContext'

function App() {

  // const [feedback, setFeedback] = useState(FeedbackData);
  // console.log(feedback);




  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">

          <Route exact path='/'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList
            />
          </Route>
          <Route path='/about' component={AboutPage} />
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
/**     React Tree
 *        Index 
 *          App
 *    Header    FeedbackList
 *              FeedbackItem
 *              Card          
 */