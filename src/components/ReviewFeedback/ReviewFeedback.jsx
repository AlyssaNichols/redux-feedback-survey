import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ReviewFeedback() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackReducer);
    console.log(feedback)


    const submitFeedback = () => {
      console.log('in submitFeedback', feedback);
  
      // axios POST to DB
      axios.post('/feedback', feedback)
        .then(res => {
          console.log(`Server response after submission:`, res);
          history.push('/submitted');
          dispatch({ type: 'CLEAR_FEEDBACK' });
        })
        .catch(err => {
          console.log('There was an error adding feedback:', err);
  
        })
      } 



  return (
    <>
      <h2>Review your feedback</h2>
      <p className="feedbackFeeling" >Feeling: {feedback.feeling}</p>
      <p className="feedbackFeeling" >Understanding: {feedback.understanding}</p>
      <p className="feedbackFeeling" >Support: {feedback.support}</p>
      <p className="feedbackFeeling" >Comments: {feedback.comments}</p>
      <button onClick={submitFeedback}>Submit</button>
    </>
  );
}
