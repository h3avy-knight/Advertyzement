import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

const Billboard = ({ users, loading }) => {
  return (
    <section className="my-5 mx-auto bg-slate-800">
      <div className="container my-5 mx-auto">
        {users.map((el) => (
          <div className="flex items-center flex-wrap md:flex justify-evenly">
            <div className="p-4 m-5 h-auto w-auto flex flex-col">
              <img src={el.avatar} alt="" className="bg-cover bg-center" />
              <div className="flex items-center justify-evenly text-2xl">
                <h1 className="text-white">{el.first_name}</h1>
                <h1 className="text-white">{el.last_name}</h1>
              </div>
              <div className="">
                <h1 className="text-2xl text-white">{el.email}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Billboard;

// users.map((el) => (
//     <div className="h-auto container w-[350px] m-auto flex">
//       <div className="p-4 m-5 h-auto w-auto flex flex-col">
//         <img src={el.avatar} alt="" className="bg-cover bg-center" />
//         <div className="flex items-center justify-evenly text-2xl">
//           <h1 className=" text-black">{el.first_name}</h1>
//           <h1 className=" text-black">{el.last_name}</h1>
//         </div>
//         <div className="">
//           <h1 className="text-2xl text-black">{el.email}</h1>
//         </div>
//       </div>
//     </div>
//   ))
