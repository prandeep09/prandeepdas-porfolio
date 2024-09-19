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
          />
          <Workcards />
        </article>
      </section>
    </>
  );
};

export default Works;
