import SectionHead from "../molecules/SectionHead";
import Cards from "../molecules/Cards";
import sectionData from "../../metadata/sectionData";
import "./groups.css";

const Heilights = () => {
  return (
    <>
      <section className="heighlights">
        <article className="section-wrapper">
          <SectionHead
            sectionName={sectionData[0]?.sectionName}
            sectionDescription={sectionData[0]?.sectionDescription}
          />
          {/* Heighlight cards */}
          <Cards />
        </article>
      </section>
      <h1></h1>
    </>
  );
};

export default Heilights;
