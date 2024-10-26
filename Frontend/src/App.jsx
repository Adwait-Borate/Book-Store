import react from "react";
import Home from "./components/home/Home";
import CoursePage from "./components/CoursePage";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    {/* <Home/>
    <Course/> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<CoursePage />} />
    </Routes>
    </>
    );
}

export default App;
