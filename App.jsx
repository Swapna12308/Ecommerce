// import React from 'react';
// import Forms from './pages/Forms';


// const App = () => {
//   return (
//     <div>
//       <Forms/>
//     </div>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Nav/Home";
import About from "./Nav/About";
import Contact from "./Nav/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;



