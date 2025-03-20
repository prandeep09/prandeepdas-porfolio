import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About.jsx";
import Casestudy from "./pages/Home/Casestudy";
import ChangeSubscribeStatus from "./pages/Casestudies/ChangeSubscribeStatus.jsx";
import InstaFinancialsRedesign from "./pages/Casestudies/InstaFinancialsRedesign.jsx";
import ScrollToTop from "./components/Helper/ScrollToTop.js";
import Footer from "./components/groups/Footer.jsx";
import Work from "./pages/Work/Work.jsx";

import "./variable.css";
import "./utilities.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* This will reset scroll on route change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Casestudy" element={<Casestudy />} />
          <Route path="/work" element={<Work />} />
          <Route path="/casestudy01" element={<ChangeSubscribeStatus />} />
          <Route path="/casestudy02" element={<InstaFinancialsRedesign />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
