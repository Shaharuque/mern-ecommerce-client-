import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/authContext";

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  console.log(auth)
  return (
    //Inbetween Layout ja ja asey display those.Inbetween Layout ja ja thakbey ta children hisabey jabey layout component ar kachey
    <Layout>
      <div className="mt-12">
        <pre>{JSON.stringify(auth,null,4)}</pre>
      </div>
    </Layout>
  );
};

export default HomePage;
