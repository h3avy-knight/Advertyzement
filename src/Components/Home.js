import React, { useState } from "react";
import { useSelector } from "react-redux";
import Billboard from "./Billboard";
import Navbar from "./Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsersData = async () => {
    const getData = await fetch("https://reqres.in/api/users?page=1");
    const response = await getData.json();
    setUsers(response.data);
    console.log(response);
    setLoading(true);
  };
  return (
    <div className="w-full h-screen">
      <Navbar getUsersData={getUsersData} />
      <Billboard users={users} loading={loading} />
    </div>
  );
};

export default Home;
