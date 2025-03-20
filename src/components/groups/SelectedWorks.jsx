import { Link } from "react-router-dom";
import SectionHead from "../molecules/SectionHead.jsx";
import Card from "../molecules/Card.jsx";
import {
  fadeUpVariants,
  viewportSettings,
} from "../../utils/framerAnimation.jsx";
import sectionData from "../../metadata/sectionData.js";
import workCardContent from "../../metadata/workCardContent.js";

const SelectedWorks = () => {
  return (
    <>
      <section id="sectionWork" className="section">
        <div className="section-wrapper">
          <SectionHead
            sectionName={sectionData[1]?.sectionName}
            sectionDescription={sectionData[1]?.sectionDescription}
            paddingTop="pd-t-72"
            fadeUpVariants={fadeUpVariants}
            viewportSettings={viewportSettings}
          />
          <div className="d-flex flex-wrap gap-48">
            <Card
              fadeUpVariants={fadeUpVariants}
              viewportSettings={viewportSettings}
              custom=".5"
              content={workCardContent[0]}
            />
            <Card
              fadeUpVariants={fadeUpVariants}
              viewportSettings={viewportSettings}
              custom="1"
              content={workCardContent[1]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectedWorks;
