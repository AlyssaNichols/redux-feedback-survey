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
    case "SET_FEELING":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    case "SET_UNDERSTANDING":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    case "SET_SUPPORT":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    case "SET_COMMENTS":
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

// This feedbackList reducer stores previous submissions,
// which have been retrieved using an axios GET.
// using an array so data is able to be mapped over
const feedbackListReducer = (state = [], action) => {
  if (action.type === "SET_FEEDBACK_LIST") {
    return action.payload;
  }
  return state;
};

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
