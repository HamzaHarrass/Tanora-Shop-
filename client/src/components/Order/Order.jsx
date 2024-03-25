import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';
import background from '../../assets/image/bg.png';

const Order = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders`);
        setOrders(response.data.orders);
        setFilteredOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  const filterOrdersByStatus = (status) => {
    if (status === 'all') {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((order) => order.status === status);
      setFilteredOrders(filtered);
    }
    setStatusFilter(status);
  };

  const renderStatusFilter = () => {
    const statusOptions = ['all', 'pending', 'processing', 'completed', 'shipped', 'delivered', 'cancelled'];

    return (
      <div className="flex justify-center mb-4">
        {statusOptions.map((option) => (
          <button
            key={option}
            onClick={() => filterOrdersByStatus(option)}
            className={`py-2 px-4 rounded-md ${
              statusFilter === option ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } focus:outline-none focus:bg-blue-500 focus:text-white mr-2`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  const renderStatusStepper = (order) => {
    const statusOptions = ['pending', 'processing', 'completed', 'shipped', 'delivered', 'cancelled'];

    return (
      <div className="flex justify-between items-center mt-4">
        {statusOptions.map((option, index) => (
          <React.Fragment key={option}>
            <button
              onClick={() => handleStatusChange(order._id, option)}
              className={`py-2 px-4 rounded-md ${order.status === option ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} focus:outline-none focus:bg-blue-500 focus:text-white`}
            >
              {option}
            </button>
            {index !== statusOptions.length - 1 && <hr className="border-t-2 border-gray-300 w-20 mx-2" />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="relative py-24 2xl:pb-44 rounded-b-9xl overflow-hidden">
          <div className="relative container px-4 mx-auto z-10">
            <svg className="mb-6 xl:mb-10 mx-auto" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_553_1414)">
                <rect width="52" height="52" rx="26" fill="#136EFC" />
                <circle cx="221" cy="237" r="279" fill="url(#paint0_linear_553_1414)" />
                <circle cx="322" cy="94" r="290" fill="url(#paint1_linear_553_1414)" />
                <circle cx="26" cy="26" r="22" fill="#EFF3F9" />
                <rect x="8" y="8" width="36" height="36" rx="18" fill="white" />
                <path d="M24.2418 32.4999L18.334 26.732L19.1142 25.9703L24.2418 30.9764L34.8871 20.5833L35.6673 21.345L24.2418 32.4999Z" fill="#326BFF" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_553_1414" x1="59.8534" y1="486.176" x2="380.222" y2="486.176" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF7611" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_553_1414" x1="322" y1="-46.5" x2="322" y2="353" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7534FF" />
                  <stop offset="1" stopColor="#7534FF" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_553_1414">
                  <rect width="52" height="52" rx="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="mb-5 xl:mb-10 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">Thanks for your order</h2>
            <p className="mb-14 xl:mb-20 text-lg text-darkBlueGray-400 font-heading text-center">We hope you enjoyed shopping with us.</p>
            {renderStatusFilter()}
            {filteredOrders.map((order) => (
              <div key={order._id} className="mx-auto max-w-2xl mt-10">
                <h3 className="mb-2 text-xl font-heading font-medium">What you ordered: {order._id}</h3>
                {order.produits.map((item) => (
                  <div key={item._id} className="sm:flex sm:items-center p-10 xl:py-5 xl:px-12 mb-3 bg-gray-100 rounded-3xl">
                    <a href="#">
                      <img className="h-28 mb-6 sm:mb-0 sm:mr-12 mx-auto sm:ml-0 object-cover rounded-xl" src={`http://localhost:3000/uploads/${item.produit.image}`} alt="" />
                    </a>
                    <div>
                      <a className="inline-block mb-1 text-lg hover:underline font-heading font-medium" href="#">
                        {item.produit.name}
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-heading">Color:</span>
                          <span className="ml-2 text-gray-400"> {item.produit.color}</span>
                        </p>
                        <p className="text-sm font-medium">
                          <span>Qty:</span>
                          <span className="ml-2 text-gray-400"> {item.quantity}</span>
                        </p>
                        <p className="text-sm font-medium ml-4">
                          <span>Status:</span>
                          <span className="ml-2 text-gray-400 "> {order.status}</span>
                        </p>
                        <p className="text-sm font-medium ml-4">
                          <span>Prix:</span>
                          <span className="ml-2 text-gray-400 "> {item.produit.prix * item.quantity}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="sm:max-w-max sm:ml-auto">
                  <p className="flex items-center justify-between font-heading font-medium">
                    <span className="mr-16">Total</span>
                    <span className="flex items-center">
                      <span className="text-3xl text-blue-500">${order.produits.reduce((total, item) => total + item.produit.prix * item.quantity, 0)}</span>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img className="sm:block fixed right-0 -mr-12 lg:-mr-24" style={{bottom:'-100px'}} src={background} alt="" />
        </div>
      </section>
    </>
  );
};

export default Order;
