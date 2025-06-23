import React from "react";
import { Routes, Route } from "react-router-dom";

// import PrivacyPolicy from "./pages/PrivacyPolicy";
import BasePage from "./components/BasePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />} />
      {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
    </Routes>
  );
};

export default App;
