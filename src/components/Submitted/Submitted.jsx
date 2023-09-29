import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Submitted(){
const history = useHistory();

    function returnHome(){
        history.push("/");
    }
    return(
        <>
        <h1>Feedback Submitted!</h1>
        <h3>Thank you!</h3>
        <button onClick={returnHome}>Leave Another Feedback Survey!</button>
        </>
    )
}