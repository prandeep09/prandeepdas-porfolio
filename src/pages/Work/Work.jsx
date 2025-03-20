import React from "react";
import Navbar from "../../components/groups/Navbar";
import SelectedWorks from "../../components/groups/SelectedWorks";

const Work = () => {
  return (
    <div>
      <Navbar />
      <section className="hero__wrapper">
        <SelectedWorks />
      </section>
    </div>
  );
};

export default Work;
