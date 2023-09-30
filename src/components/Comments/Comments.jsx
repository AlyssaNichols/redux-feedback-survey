import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, TextField } from "@mui/material";

export default function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let commentsReduxState = "";

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.comments) {
    console.log("comments is", feedback.comments);
    commentsReduxState = feedback.comments;
  }
  // local state for input
  const [comments, setComments] = useState(commentsReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();
    history.push("/support");
  }; // end handleBack

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("in handleSubmit, comments is: ", comments);

    dispatch({
      type: "SET_COMMENTS",
      payload: { property: "comments", value: comments },
    });

    // reset state
    setComments("");
    history.push("/reviewFeedback");
  };

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text" 
          id="filled-basic" 
          variant="filled" 
          placeholder="Any Comments?" 
          value={comments}
          onChange={event => setComments(event.target.value)} 
        /> */}
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
        <TextField
          id="outlined-helperText"
          className="commentInput"
          label="Comments"
          helperText="Any additional comments!"
          value={comments}
          onChange={event => setComments(event.target.value)}
        />
        </Box>
        <br />
        <br />
        <button onClick={handleBack}>Back</button>{" "}
        <button onClick={handleSubmit}>Next</button>
      </form>
    </>
  );
}
