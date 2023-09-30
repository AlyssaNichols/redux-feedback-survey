import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

// App.jsx Stylesheet
import "./App.css";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Admin from "../Admin/Admin";
import Comments from "../Comments/Comments";
import Home from "../Home/Home";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import Submitted from "../Submitted/Submitted";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main className="App-main">
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
              <NavLink exact to="/submitted">
                Submitted
              </NavLink>
              </li>
              <li>
              <NavLink exact to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/feeling">
            <Feeling />
          </Route>

          <Route path="/understanding">
            <Understanding />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>

          <Route path="/reviewFeedback">
            <ReviewFeedback />
          </Route>
          <Route path="/submitted">
            <Submitted />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
        </Router>
      </main>
      <footer>
        <div className="footer-content">
          <p>&copy; Alyssa Nichols 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
