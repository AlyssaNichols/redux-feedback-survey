import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Admin({displayFeedback}) {
    const dispatch = useDispatch();
  const orders = useSelector((state) => state.feedbackListReducer);

  console.log("orders",orders);


  useEffect(() => {
    displayFeedback();
  }, []);

  return (
    <>
      <h2 className="admin-header">Admin Orders</h2>
      <div className="admin-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Order Total</th>
            <th>Order Time</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order) => {
            return (
              <tr key={order.id}>
              <td>{order.customer_name}</td>
              <td>${order.total}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              </tr>

            );
          })}
          
        </tbody>
      </table>
    </div>
    </>
  );
}