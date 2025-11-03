import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import List from "./pages/List";
import UpdateUser from "./pages/UpdateUser";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<List />} />
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
