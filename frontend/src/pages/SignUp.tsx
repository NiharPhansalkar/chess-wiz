import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface formTypes {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formTypes>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const redirectLogin = (e) => {
    e.preventDefault();

    try {
      navigate("/login");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black border-gray-800 border w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <a
            className="no-underline border-b border-blue text-sky-700 cursor-pointer"
            onClick={(e) => {
              redirectLogin(e);
            }}
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
