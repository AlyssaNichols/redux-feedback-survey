import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from '@mui/material';

export default function Home () {
const history = useHistory();
function startSurvey() {
 history.push('/feeling')
 console.log("start??")
}

  return(
    <>
      <h1>Welcome to your Feedback Survery! </h1> 
      <br />
      <hr />
      <br />
      <h1>Let us know how you're feeling this week </h1>
      <p className="homepageP">Rate how you are feeling on a scale of 1-5 <br /> 1 being low and 5 being high</p>
      <br />
      <Button
      style={{ backgroundColor: "#6F4255" }}
      className="startButton"
      onClick={startSurvey}
      variant="contained"
      // Add hover effect styles here
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#AA6582"; // Change the background color on hover
        // You can add more hover effects here if needed
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#6F4255"; // Reset the background color on mouse out
      }}
    >
      Lets get started!
    </Button>
    </>
  );
} // end Home

