import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPart1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FIRST_NAME: "",
    SECOND_NAME: "",
    GMAIL: "",
    PHONE_NUMBER: "",
    AGE: "",
    GENDER: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      age: Number(formData.AGE), // Ensure age is a number
    };
    console.log("Formdata : ",updatedFormData)
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
    try {
      const res = await axios.post(
        `${baseUrl}/api/register-step1`,
        formData
      );
      const regId = res.data.reg_id;
      const user = res.data.user;
      if (regId) {
        localStorage.setItem('user', JSON.stringify( user ));
        localStorage.setItem('regId', JSON.stringify( regId ));
        navigate(`/register-step2/${regId}`);
      } else {
        alert("reg_id not returned.");
      } 
      console.log("BACKEND response : ",res)
      console.log("Step 1 Success:", res.data);
      alert("Registration Step 1 done. Now complete Step 2.");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Failed to register.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <input name="FIRST_NAME" placeholder="First Name" onChange={handleChange} className="border p-2 w-full" />
      <input name="SECOND_NAME" placeholder="Second Name" onChange={handleChange} className="border p-2 w-full" />
      <input name="GMAIL" placeholder="Gmail" onChange={handleChange} className="border p-2 w-full" />
      <input name="PHONE_NUMBER" placeholder="Phone Number" onChange={handleChange} className="border p-2 w-full" />
      <input name="AGE" placeholder="Age" type="number" onChange={handleChange} className="border p-2 w-full" />
      <select name="GENDER" onChange={handleChange} className="border p-2 w-full">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Step 1</button>
    </form>
  );
};

export default RegisterPart1;
