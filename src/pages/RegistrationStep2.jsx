import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPart2 = () => {
  const navigate = useNavigate();
  const { regId } = useParams();
  const [formData, setFormData] = useState({
    USER_NAME: "",
    USER_PASSWORD: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
  
  const handleSubmit = async (e) => {
    console.log(`${baseUrl}/api/register-step2/${regId}`)
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseUrl}/api/register-step2/${regId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', // Adjust if sending non-JSON
          },
          body: JSON.stringify(formData),
        }
      );
      
      // Check for success and parse JSON
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const res = await response.json();
      
      console.log(res)
      alert("Registration completed!");
      console.log(res.data);
      navigate(`/profile/`);
    } catch (err) {
      console.log(err)
      console.error("Step 2 error:", err.message);
      alert("Step 2 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6">
      <p className="text-gray-700">Reg ID: <strong>{regId}</strong></p>
      <input name="USER_NAME" onChange={handleChange} placeholder="Username" className="border p-2 w-full" />
      <input name="USER_PASSWORD" type="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Finish Registration</button>
    </form>
  );
};

export default RegisterPart2;
