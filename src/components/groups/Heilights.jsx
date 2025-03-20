import SectionHead from "../molecules/SectionHead";
import HighlightCards from "../molecules/HighlightCards";
import sectionData from "../../metadata/sectionData";

import "./groups.css";

const Heilights = () => {
  return (
    <>
      <section className="heighlights section">
        <article className="section-wrapper">
          {/* Company logo */}

          <div className="Section-Devider">
            {/* <img src={GreyDevider} alt="A section devider" /> */}
          </div>
          {/* Heighlight cards */}
          <SectionHead
            sectionName={sectionData[0]?.sectionName}
            sectionDescription={sectionData[0]?.sectionDescription}
            paddingTop="pd-t-72"
          />
          <HighlightCards />
        </article>
      </section>
      <div className="Section-Devider"></div>
    </>
  );
};

export default Heilights;
