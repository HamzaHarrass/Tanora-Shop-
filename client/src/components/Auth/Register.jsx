import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    nom: "",  // Adding "nom" field
    prenom: "",  // Adding "prenom" field
    password_confirmation: "",
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
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Registration successful!");
      navigate("auth/login");
    } catch (error) {
      console.error(error);
      setError(error.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center bg-auth-bg bg-center bg-cover bg-no-repeat">
      <h1 className="text-blue-700">Register</h1>
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4"
          style={{
            width: '90%',
            maxWidth: '500px',
            minWidth: '320px'
          }}
        >
          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="nom">Nom</label>
          <div className="relative">
            <input
              id="nom"
              type="text" 
              value={credentials.nom}
              onChange={(e) => handleChange("nom", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom"
            />
          </div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="prenom">Prénom</label>
          <div className="relative">
            <input
              id="prenom"
              type="text" 
              value={credentials.prenom}
              onChange={(e) => handleChange("prenom", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prénom"
            />
          </div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
          <div className="relative">
            <input
              id="email"
              type="email" 
              value={credentials.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>

          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
          <div className="relative">
            <input
              id="password"
              type="password" 
              value={credentials.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
            />
          </div>
          <div className="flex items-center justify-between font-semibold">
            <Link to={`/auth/login`} className="hover:text-blue-500 ms-auto">
              Login
            </Link>
          </div>
          <button type="submit" className="py-2 rounded-lg bg-blue-500 text-white font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
