import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { CloseSquareFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const deleteHandler = () => {
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      phone,
      address,
      answer,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        payload
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message, {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <Layout>
      <div className="bg-my-background-image flex justify-center lg:justify-end items-center lg:pr-8 p-2">
        <form
          className="lg:m-12 px-6 py-2 text-black border border-white rounded-md w-full md:w-1/2 lg:w-1/3 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <h2 className="flex items-center justify-between">
              Register
              <CloseSquareFilled onClick={deleteHandler} />
            </h2>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="adress"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="ans"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button
            className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 rounded hover:bg-black hover:text-white"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
