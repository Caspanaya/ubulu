import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import React from "react";
import Ci from "./pages/ci/Ci";
import WhatWeOffer from "./pages/Copoerate service/WhatWeOffer";
import University from "./pages/university/University";
import Startup from "./pages/Startup/Startup";
import Talent from "./pages/Talent/Talent";
import Program from "./pages/Programs/Program";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import Corporateinnovation from "./pages/Corporate-Innovation/Corporateinnovation";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate-innovation" element={<Corporateinnovation />} />
        <Route path="/corporate" element={<Ci />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/university" element={<University />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
