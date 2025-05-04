import React, { useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const Register = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    FIRST_NAME: '',
    SECOND_NAME: '',
    GMAIL: '',
    PHONE_NUMBER: '',
    AGE: '',
    GENDER: ''
  });
  const [regId, setRegId] = useState('');
  const [credentials, setCredentials] = useState({
    USER_NAME: '',
    USER_PASSWORD: ''
  });

//   const baseURL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitStep1 = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/REG/POST/`, form);

      const { data } = await axios.get(`${baseURL}/REG/GET/`);
      const user = data.items.find(u => u.gmail.toLowerCase() === form.GMAIL.toLowerCase());

      if (user) {
        setRegId(user.reg_id);
        setStep(2);
      } else {
        alert('Registration succeeded but regId not found.');
      }
    } catch (err) {
      console.error(err);
      alert('Error in registration');
    }
  };

  const handleChangeCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseURL}/USER/PUT/${regId}/`, credentials);
      alert('Username and Password set successfully!');
      setStep(1); // Optionally reset
    } catch (err) {
      console.error(err);
      alert('Error in setting username/password');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {step === 1 ? (
        <form onSubmit={handleSubmitStep1} className="space-y-4">
          <h2 className="text-2xl font-bold">Register - Step 1</h2>
          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key.replace(/_/g, ' ')}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          ))}
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Submit Step 1
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitStep2} className="space-y-4">
          <h2 className="text-2xl font-bold">Register - Step 2</h2>
          <input
            type="text"
            name="USER_NAME"
            value={credentials.USER_NAME}
            onChange={handleChangeCredentials}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="USER_PASSWORD"
            value={credentials.USER_PASSWORD}
            onChange={handleChangeCredentials}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Submit Step 2
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
