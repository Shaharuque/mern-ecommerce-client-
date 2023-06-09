import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { CloseSquareFilled } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = ({ from }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //context api
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        payload
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res?.data?.user,
          token: res?.data?.token,
        });
        localStorage.setItem("auth", JSON.stringify(res?.data));
        if (from !== null) {
          console.log("loging from navigation to", from?.from?.pathname);
          navigate(`${from?.from?.pathname}`);
        } else {
          console.log("login from navigation to default");
          navigate("/"); //admin panel a redirect
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <div className="bg-my-background-image flex justify-end items-center p-2 lg:pr-8">
        <form
          className="p-2 lg:p-8 text-black border border-white rounded-md w-full lg:w-1/2 xl:w-1/3 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <h2 className="flex items-center justify-between">
              Login
              <CloseSquareFilled className="hover:bg-black" />
            </h2>
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
          <button
            className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
