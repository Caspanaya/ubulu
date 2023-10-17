import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Ci from "./pages/ci/Ci";
import React from "react";
import WhatWeOffer from "./pages/Copoerate service/WhatWeOffer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovation" element={<Ci />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
      </Routes>
    </Router>
  );
};

export default App;
