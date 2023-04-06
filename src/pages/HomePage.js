import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    //Inbetween Layout ja ja asey display those.Inbetween Layout ja ja thakbey ta children hisabey jabey layout component ar kachey
    <Layout>
      <div className="mt-12">
        <h1>This is Home Page</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
