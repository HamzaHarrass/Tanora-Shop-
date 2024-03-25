import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3000/orders/all');
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const openPopup = (orderId, status) => {
    setSelectedOrderId(orderId);
    setNewStatus(status);
    setShowPopup(true);
  };

  const handleStatusUpdate = async () => {
    try {
      await axios.patch(`http://localhost:3000/orders/${selectedOrderId}`, {
        status: newStatus,
      });

      setShowPopup(false);
      setNewStatus('');
      fetchOrders();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>
      <ul className='flex gap-4 flex-wrap'>
        {orders.map((order) => (
          <li key={order._id} className="rounded p-4 mb-4 flex-1 bg-green-100 shadow-lg relative flex flex-col gap-3" style={{minWidth:'400px', maxWidth:'440px'}}>
            <div className='absolute top-4 right-8 bg-blue-500 text-white rounded-lg py-1 px-3'> {order.status}</div>
            <h3 className="text-xl font-bold" style={{maxWidth:'25ch', textOverflow: 'ellipsis' , overflow:'hidden', whiteSpace: 'nowrap'}}>Order ID: {order._id}</h3>
            <p className="text-gray-600">
              by: {order.user ? order.user.nom : 'Unknown User'}
            </p>
            <h4 className="text-lg font-semibold mt-2">Products:</h4>
            <ul className='flex flex-col gap-4'>
              {order.produits.map((produit) => (
                <li key={produit._id} className="mt-2 pt-2 bg-white px-3 rounded-xl pb-2 shadow-xl  ">
                  <p className="text-lg font-medium">
                    Name: {produit.produit ? produit.produit.name : 'Unknown Product'}
                  </p>
                  <p className="text-gray-600">Quantity: {produit.quantity}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openPopup(order._id, order.status)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-max ml-auto mt-auto"
            >
              Update Status
            </button>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg max-w-md">
            <h2 className="text-lg font-semibold mb-4">Update Order Status</h2>
            <select
              className="block w-full p-2 border border-gray-300 rounded mb-4"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleStatusUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllOrder;
