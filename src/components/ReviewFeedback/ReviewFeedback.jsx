import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ReviewFeedback() {

    const postCheckout = () => {
        axios.post('/api/order', allInfo)
          .then((response) => {
            console.log(response.data);
            history.push("/");
          dispatch({ type: "CLEAR_CART" });
          dispatch({ type: "CLEAR_ORDER" });
          })
          .catch((error) => {
            console.log("error on POST to add order in DB", error);
          });
      };
    
    const history = useHistory();
    const dispatch = useDispatch();
    // feedback reducer
    const feedback = useSelector(store => store.feedback);
    console.log(feedback)

    const routeToHome = () => {
        // clear our feedback reducer
        dispatch({ type: 'CLEAR_FEEDBACK' });
        // send user back to the Home page
        history.push('/');
      };
    return(
        <>
        <h2>Review your feedback</h2>
        <h4>Feeling: {feedback.feeling}</h4>
        <h4>Understanding: {feedback.understanding}</h4>
        <h4>Support: {feedback.support}</h4>
        <h4>Comments: {feedback.comments}</h4>

        </>
    )
}