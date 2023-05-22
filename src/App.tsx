import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Countries from "./screens/Countries";
import Country from "./screens/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:code" element={<Countries />} />
        <Route path="/countries/:code/:countryCode" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
