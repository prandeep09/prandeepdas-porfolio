import Hero from "../../components/groups/Hero";
import Footer from "../../components/groups/Footer";
import Heilights from "../../components/groups/Heilights";
import Works from "../../components/groups/Works";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        {/* HERO SECTION */}
        <Hero />
        <Heilights />
        <Works />
        <Footer />
      </div>
    </>
  );
};

export default Home;
