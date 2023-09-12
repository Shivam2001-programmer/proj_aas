import "./App.css";
import Courses from "./component/Courses/Courses";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </>
  );
}

export default App;
