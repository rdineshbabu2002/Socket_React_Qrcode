import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Screen/Form/Form";
import Home from "./Screen/Home/Home";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abc/:id" element={<Form />} />
    </Routes>
  );
};

export default Allroutes;
