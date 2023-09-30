import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";


export default function Submitted(){
const history = useHistory();
const dispatch = useDispatch();
// dispatch({ type: 'CLEAR_FEEDBACK' });



    function returnHome(){
        history.push("/");

    }
    return(
        <>
        <h1>Feedback Submitted!</h1>
        <h3>Thank you!</h3>
        <button className="startButton" onClick={returnHome}>Leave New Feedback!</button>
        </>
    )
}