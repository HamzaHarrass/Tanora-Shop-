import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../../assets/style/css.css';
import image from '../../assets/image/image.png';

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSignUpClick = (e) => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = (e) => {
    setIsSignUpMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSignUpMode) {
      try {
        const response = await axios.post('http://localhost:3000/auth/register', formData);
        console.log(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError('Registration failed. Please try again.');
      }
    } else {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', formData);
        console.log(response);
        Cookies.set('token', response.data.access_token, { expires: 7 }); 
        setError(null);
        navigate('/produit/');
      } catch (error) {
        console.error(error);
        setError('Login failed. Please check your credentials and try again.');
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={`container-auth ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`} onSubmit={handleFormSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" autoComplete="Email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" autoComplete="current-password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <button type="submit" value="Login" className="btn solid">Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>

          <form action="#" className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`} onSubmit={handleFormSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nom" autoComplete="username" name="nom" value={formData.nom} onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Prenom" autoComplete="username" name="prenom" value={formData.prenom} onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" autoComplete="Email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" autoComplete="current-password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn" value="Sign up">Sign up</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={image} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={image} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
