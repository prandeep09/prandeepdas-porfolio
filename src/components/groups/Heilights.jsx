import SectionHead from "../molecules/SectionHead";
import HighlightCards from "../molecules/HighlightCards";
import sectionData from "../../metadata/sectionData";
import AmazonLogo from "../../assets/Amazon_logo.svg";
import InstaFinLogo from "../../assets/if1.svg";
import IvoyantLogo from "../../assets/ivoyant.svg";
import CricketLogo from "../../assets/cricket-wireless.svg";
import "./groups.css";

const Heilights = () => {
  return (
    <>
      <section className="heighlights section">
        <article className="section-wrapper">
          {/* Company logo */}
          <div className="Highlights__Company">
            <div className="Highlights__Company--Container">
              <div className="Highlights__Company--logoBox">
                <img src={AmazonLogo} alt="Amazon logo" />
              </div>
              <div className="Highlights__Company--logoBox">
                <img src={InstaFinLogo} alt="Instafiancials logo" />
              </div>
              <div className="Highlights__Company--logoBox">
                <img src={IvoyantLogo} alt="Ivoyant logo" />
              </div>
              <div className="Highlights__Company--logoBox">
                <img src={CricketLogo} alt="Cricket wireless logo" />
              </div>
            </div>
          </div>
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
