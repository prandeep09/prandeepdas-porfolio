import SectionHead from "../molecules/SectionHead";
import Workcards from "../molecules/Workcards";
import sectionData from "../../metadata/sectionData";
import "./groups.css";

const Works = () => {
  return (
    <>
      <section id="sectionWork" className="section">
        <article className="section-wrapper">
          <SectionHead
            sectionName={sectionData[1]?.sectionName}
            sectionDescription={sectionData[1]?.sectionDescription}
            paddingTop="pd-t-72"
          />
          <Workcards />
        </article>
      </section>
      <div className="Section-Devider"></div>
    </>
  );
};

export default Works;
