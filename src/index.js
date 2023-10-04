import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import logger from "redux-logger";

// Redux
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";

// This feedback reducer stores submitted values from each input view.
// This data will be found in an object as the body for DB submission
const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_FEEDBACK":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    case "CLEAR_FEEDBACK":
      return {};
    default:
      return state;
  }
};


const feedbackListReducer = (state = [], action) => {
switch (action.type) {
    case "SET_FEEDBACK_LIST":
      return action.payload;
    case "CLEAR_FEEDBACK_LIST":
      return [];
      default:
        return state;
}
}

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    feedbackListReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
