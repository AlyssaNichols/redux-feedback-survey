import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";


export default function Submitted(){
const history = useHistory();
const dispatch = useDispatch();

    function returnHome(){
        history.push("/");

    }
    return(
        <>
        <h1>Feedback Submitted!</h1>
        <h3>Thank you!</h3>
        <button onClick={returnHome}>Leave New Feedback!</button>
        </>
    )
}