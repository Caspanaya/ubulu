import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import React from "react";
import Ci from "./pages/ci/Ci";

const App = () => {
  return (
    <>
      {
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ci" element={<Ci />} />
          </Routes>
        </Router>
      }
    </>
  );
};

export default App;
