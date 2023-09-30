import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackListReducer);

  console.log(feedback);

  useEffect(() => {
    displayFeedback();
  }, []);;

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

  const handleDelete = (id) => {
    axios({
      method: 'DELETE',
      url: `/feedback/${id}`
    })
      .then((response) => { 
        
        displayFeedback(); 
      })
      .catch((error) => {
        console.log('error on delete: ', error)
      })
  };


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
                  <td>
                    <button onClick={() => handleDelete(feedback.id)}>
                      Remove
                    </button>
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
