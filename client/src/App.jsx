import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <h1 className="bg-danger">Welcome to Mern Stack Project</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
