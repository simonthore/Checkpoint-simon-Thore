import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Countries from "./screens/Countries";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:code" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
