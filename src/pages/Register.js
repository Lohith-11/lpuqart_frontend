import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/verse/auth/register', { email, password });
      console.log(response.data);
      // Redirect to products page upon successful registration
      navigate('/products');
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      // Handle registration error
    }
  };

  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;