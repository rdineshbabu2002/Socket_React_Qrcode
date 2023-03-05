import React from "react";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "./Allroutes";

const App = () => {
  return (
    <BrowserRouter>
      <Allroutes />
    </BrowserRouter>
  );
};

export default App;
