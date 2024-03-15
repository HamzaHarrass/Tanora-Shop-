import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email: credentials.email,
        password: credentials.password,
      };

      const response = await axios.post('http://localhost:3000/auth/login', formData);
      console.log(response);
      Cookies.set('token', response.data.access_token, { expires: 7 }); 
      setError(null);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <h1 className="text-blue-700">Login</h1>
      <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
        Sprint Snap: Organize, Collaborate, and Deliver. Log In to Power Your Projects
      </p>
      <div className="py-3">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414l-2.93 2.435a1 1 0 1 1-1.237-1.582l2.93-2.435-2.93-2.434a1 1 0 1 1 1.237-1.582l2.93 2.435 2.93-2.435a1 1 0 1 1 1.237 1.582l-2.93 2.434 2.93 2.435a1 1 0 0 1 0 1.582z"
                />
              </svg>
            </span>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)} className="min-w-[320px] flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <div className="relative mb-6">
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>

          <label className="text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <div className="relative mb-6">
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
            />
          </div>
          <div className="flex items-center justify-between font-medium">
            <Link to={`/auth/password/forget`} className="hover:text-blue-500">
              Forget Password?
            </Link>
            <Link to={`/auth/register`} className="hover:text-blue-500">
              Register
            </Link>
          </div>
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
