import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ByCategoryPage from "./pages/catagori.jsx";
import DetailsPage from "./pages/Details.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/byCategory/:categoryID" element={<ByCategoryPage />} />
      <Route path="/details/:postID" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
