import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Ci from "./pages/ci/Ci";
import React from "react";
import WhatWeOffer from "./pages/Copoerate service/WhatWeOffer";
import University from "./pages/university/University";
import Startup from "./pages/Startup/Startup";
import Talent from "./pages/Talent/Talent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovation" element={<Ci />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/university" element={<University />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/talent" element={<Talent />} />
      </Routes>
    </Router>
  );
};

export default App;
