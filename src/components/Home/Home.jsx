import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home () {
const history = useHistory();
function startSurvey() {
 history.push('/feeling')
 console.log("start??")
}

  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>
      <button
        onClick={startSurvey}
      >Lets get started!
      </button>
    </>
  );
} // end Home

