import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let commentValue = feedback.comments;

  const [comments, setComments] = useState(commentValue);

  const handleBack = (event) => {
    event.preventDefault();
    // pushes back to support page
    history.push("/support");
  };

  // submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_COMMENTS",
      payload: { property: "comments", value: comments },
    });
    // reset comments
    setComments("");
    // send user to next page
    history.push("/reviewFeedback");
  };
  // left other input field in comments because I had cool styling for it before importing MUI
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
          className="commentsField"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="commentInput"
            label="Comments"
            helperText=" Leave any additional comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </Box>
        <br />
        <br />
        <Button color="secondary" variant="contained" onClick={handleBack}>
          Back
        </Button>{" "}
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </form>
    </>
  );
}
