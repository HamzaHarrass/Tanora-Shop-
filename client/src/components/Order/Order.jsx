import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders`);
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Orders for User ID: {userId}</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="border rounded-lg p-4 mb-4">
            <p className="font-bold">Order ID: {order._id}</p>
            <p>Status: {order.status}</p>
            <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
            <h4 className="text-lg font-semibold mt-4">Products:</h4>
            <ul className="list-disc list-inside">
              {order.produits.map((item) => (
                <li key={item.produit._id} className="ml-4">
                  {item.produit.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold">
              Total: ${order.produits.reduce((total, item) => total + item.produit.prix * item.quantity, 0)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
