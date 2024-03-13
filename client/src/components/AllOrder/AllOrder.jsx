import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders/all');
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id} className="border rounded p-4 mb-4">
            <h3 className="text-xl font-bold">Order ID: {order._id}</h3>
            <p className="text-gray-600">User ID: {order.user}</p>
            <h4 className="text-lg font-semibold mt-2">Products:</h4>
            <ul>
              {order.produits.map(produit => (
                <li key={produit._id} className="border-t mt-2 pt-2">
                  <p className="text-lg font-medium">Name: {produit.produit.name}</p>
                  <p className="text-gray-600">Quantity: {produit.quantity}</p>
                  <p className="text-gray-600">Price: {produit.price}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllOrder;
