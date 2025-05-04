import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv';

const Login = () => {
  const [gmail, setGmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    // dotenv.config()
console.log(".env url",import.meta.env);

    console.log(import.meta.env.VITE_API_BASE_URL)
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
    console.log("Base url ", baseUrl)

    try {
      let formData = {
        "GMAIL" : gmail,
        "PASSWORD" : user_password
      }
      console.log(formData)
      // const res = await axios.get(`http://localhost:5000/LOGIN/GET_JIT/${gmail}/${user_password}`);
      const res = await fetch(`${baseUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      const userItems = data.user;
      console.log(data,"DATA")
      console.log(userItems,"USer Items")

      if (userItems && userItems != undefined) {
        const user = userItems;

        // Create dummy JWT token (in real case your backend should give this)
        const JWTToken = data.token; // You can replace this later
        console.log(JWTToken)
        // Store auth data in localStorage
        localStorage.setItem('auth_token', JWTToken);
        localStorage.setItem('auth_user', JSON.stringify(user));

        navigate('/profile');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={user_password}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
