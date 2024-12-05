import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Home/About";
import Casestudy from "./pages/Home/Casestudy";

import "./variable.css";
import "./utilities.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Casestudy" element={<Casestudy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
