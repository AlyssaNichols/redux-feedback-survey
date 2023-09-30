import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function Admin() {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackListReducer);

  console.log(feedback);
  // on page load have feedback loaded
  useEffect(() => {
    displayFeedback();
  }, []);

  // AXIOS GET FUNCTION
  const displayFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_FEEDBACK_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET to display feedbackListReducer", error);
      });
  };
  // AXIOS DELETE FUNCTION
  const handleDelete = (id) => {
    axios({
      method: "DELETE",
      url: `/feedback/delete/${id}`,
    })
      .then((response) => {
        displayFeedback();
      })
      .catch((error) => {
        console.log("error on delete: ", error);
      });
  };
  // format the date to look nicer in the table
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  // returning to the page
  return (
    <>
      <h2 className="admin-header">Admin Orders</h2>
      <div className="admin-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((feedback) => {
              return (
                <tr key={feedback.id}>
                  <td>{feedback.feeling}</td>
                  <td>{feedback.understanding}</td>
                  <td>{feedback.support}</td>
                  <td>{feedback.comments}</td>
                  <td>{formatDate(feedback.date)}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      className="removeButton"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this feedback?"
                          )
                        ) {
                          handleDelete(feedback.id);
                        }
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
