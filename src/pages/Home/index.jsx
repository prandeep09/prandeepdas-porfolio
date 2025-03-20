import Hero from "../../components/groups/Hero";
import SelectedWorks from "../../components/groups/SelectedWorks";
import Myprofile from "../../components/groups/Myprofile";
import Heilights from "../../components/groups/Heilights";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        {/* HERO SECTION */}
        <Hero />
        {/* <Heilights /> */}
        <SelectedWorks />
        <div className="Section-Devider"></div>
        {/* <Works /> */}
        <Myprofile />
      </div>
    </>
  );
};

export default Home;
