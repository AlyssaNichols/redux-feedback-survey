import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// App.jsx Stylesheet
import './App.css';
import Feeling from "../Feeling/Feeling";


// import Admin from '../Admin/Admin';
// import Comments from '../AdditionalComments/AdditionalComments';
// import Home from '../Home/Home';
// import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
// import Support from '../SupportRating/SupportRating';
// import Understanding from '../UnderstandingRating/UnderstandingRating';

function App() {
  // Local state used for conditional rendering on Home page
  // On submission from ReviewFeedback, boolean is set to true
  // When the "give feedback" button is clicked on home, boolean is set to false

  // const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  return (
    <div className='App'>
      
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main className='App-main'>
        <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/feeling">
                Feeling
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/understanding">
                Understanding
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/support">
                Support
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/comments">
                Comments
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/reviewFeedback">
                Review Feedback
              </NavLink>
              </li>
              <li>
              <NavLink exact to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
          {/* Home, Welcome Greeting */}
          {/* Invites the user to engage with survey */}
          <Route path="/" exact>
            {/* <Home 
              feedbackSubmitted={feedbackSubmitted} 
              setFeedbackSubmitted={setFeedbackSubmitted} 
            /> */}
          </Route>

          {/* 1st view, Input Feeling Rating */}
          {/* How are you feeling today? */}
          <Route path="/feeling">
            <Feeling />
          </Route>

          {/* 2nd view, Input Understand Rating */}
          {/* How well are you understanding the content? */}
          <Route path="/understanding">
            {/* <Understanding /> */}
          </Route>

          {/* 3rd view, Input Support Rating */}
          {/* How well are you being supported? */}
          <Route path="/support">
              {/* <Support /> */}
          </Route>

          {/* 4th view, Input Additional Comments */}
          {/* Any comments you want to leave? */}
          <Route path="/comments">
            {/* <Comments /> */}
          </Route>

          {/* 5th view, Review Feedback Before Submission to DB */}
          {/* Review your feedback before submission. */}
          <Route path="/reviewFeedback">
            {/* <ReviewFeedback setIsFeedbackSubmitted={setIsFeedbackSubmitted} /> */}
          </Route>

          <Route path="/admin">
            {/* <Admin /> */}
          </Route>

        </Router>
      </main>
    </div>
  );
}

export default App;