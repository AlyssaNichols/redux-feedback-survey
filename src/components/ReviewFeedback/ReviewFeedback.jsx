import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ReviewFeedback() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackListReducer);
    console.log(feedback)

  const submitFeedback = () => {
    axios
      .post("/", feedback)
      .then((response) => {
        console.log(response.data);
        history.push("/");
        dispatch({ type: "CLEAR_FEEDBACK" });
        history.push("/");

      })
      .catch((error) => {
        console.log("error on POST to feedback DB", error);
      });

  };



  return (
    <>
      <h2>Review your feedback</h2>
      <h4>Feeling: {feedback.feeling}</h4>
      <h4>Understanding: {feedback.understanding}</h4>
      <h4>Support: {feedback.support}</h4>
      <h4>Comments: {feedback.comments}</h4>
      <button onClick={submitFeedback}>Submit</button>
    </>
  );
}
