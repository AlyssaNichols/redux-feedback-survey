import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// This feedback reducer stores submitted values from each input view.
// This data will be found in an object as the body for DB submission 
const feedback = (state = {}, action) => {
  // Action from the first form - Feeling Submission
  if(action.type === 'SET_FEELING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
  }
  /**
   * State is now:
   * 
   * { feeling: (score 1 out of 5) }
   */
  // Action from the second form - Understanding Submission
  if(action.type === 'SET_UNDERSTANDING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
  /**
   * State is now:
   * 
   * { feeling: (score 1 out of 5), understanding: (score 1 out of 5) }
   */
}
  // Action from the third form - Support Submission
  if(action.type === 'SET_SUPPORT') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
}
    /**
     * State is now:
     * 
     * { 
     *  feeling: (score 1 out of 5), 
     *  understanding: (score 1 out of 5), 
     *  support: (score 1 out of 5) 
     * }
     */

  // Action from the third form - Comments Submission
  if(action.type === 'SET_COMMENTS') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; // { feeling: (score 1 out of 5), understanding: (score 1 out of 5), support: (score 1 out of 5), comments: 'A string of text from user, could be blank (optional)' }
    /**
     * State is now:
     * 
     * { 
     *  feeling: (score 1 out of 5), 
     *  understanding: (score 1 out of 5), 
     *  support: (score 1 out of 5), 
     *  comments: 'A string of text from user, could be blank (optional).' 
     * }
     */
  }
  // Action when sent back to home page - resets feedback state
  if(action.type === 'CLEAR_FEEDBACK') {
    return {};
  }
  return state;
} // end feedback reducer

// This feedbackList reducer stores previous submissions, 
// which have been retrieved using an axios GET.
// using an array so data is able to be mapped over
const feedbackList = (state = [], action) => {
  if (action.type === 'SET_FEEDBACK_LIST') {
    return action.payload;
  }
  /**
   * State is now:
   * 
   * [
   *  {
   *    comments: "Doing Great!"
   *    date: "2021-02-25T06:00:00.000Z"
   *    feeling: 4
   *    flagged: false
   *    id: 1
   *    support: 5
   *    understanding: 4
   *  },
   *  {
   *    comments: "This is hard!"
   *    date: "2021-02-27T06:00:00.000Z"
   *    feeling: 2
   *    flagged: false
   *    id: 1
   *    support: 4
   *    understanding: 1
   *  }, ...etc.
   * ]
   */
  return state;
} 

const storeInstance = createStore(
  combineReducers({
    feedback,
    feedbackList
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
