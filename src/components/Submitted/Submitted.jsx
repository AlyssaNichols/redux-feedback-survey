import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@mui/material';


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
        <Button color="secondary" variant="contained" className="startButton" onClick={returnHome}>Leave New Feedback!</Button>
        </>
    )
}