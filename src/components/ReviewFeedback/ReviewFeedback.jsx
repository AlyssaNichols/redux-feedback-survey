import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@mui/material";

export default function ReviewFeedback() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedbackReducer);

  const submitFeedback = () => {
    // axios POST to DB
    // also clears feedback from reducer on submit
    axios
      .post("/feedback", feedback)
      .then((res) => {
        console.log(`Server response after submission:`, res);
        history.push("/submitted");
        dispatch({ type: "CLEAR_FEEDBACK" });
      })
      .catch((err) => {
        console.log("There was an error adding feedback:", err);
      });
  };

  return (
    <>
      <h2>Review your feedback</h2>
      <p className="feedbackFeeling">Feeling: {feedback.feeling}</p>
      <p className="feedbackFeeling">Understanding: {feedback.understanding}</p>
      <p className="feedbackFeeling">Support: {feedback.support}</p>
      <p className="feedbackFeeling">
        Comments:{" "}
        {feedback.comments ? feedback.comments : "No comments were given!"}
      </p>
      <Button
        style={{ backgroundColor: "#6F4255" }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#AA6582";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#6F4255";
        }}
        variant="contained"
        onClick={submitFeedback}
      >
        Submit
      </Button>
    </>
  );
}
