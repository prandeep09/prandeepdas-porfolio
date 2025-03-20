import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HeroImage from "../../assets/Hero_image_v3.svg";
import PorfolioLogoPrimary from "../../assets/Prandeep__Logo-red.svg";
import HeroImageBorderCircle from "../../assets/Hero_circle.svg";
import HeroImageBorderCircleRed from "../../assets/HeroImageBorderCircle-red.svg";
import LogoInner from "../../assets/Logo-inner.svg";
import BlurCircle from "../../assets/blur-circle.svg";
import BlurBg from "../../assets/blur_bg.svg";
import Button from "../molecules/Button";
import {
  fadeUpVariants,
  viewportSettings,
} from "../../utils/framerAnimation.jsx";
import "./groups.css";
import "../../CSS/animation.css";

const Myprofile = () => {
  return (
    <>
      <section id="sectionProfile" className="section">
        <div className="section-wrapper section-profile d-flex flex-wrap pd-t-72">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            custom={0} // No delay for first div
            className="col-6 col-mob-12"
          >
            <h1 className="heading__XL mg-b-8 zi-1">
              Strategizing, Designing & Developing&nbsp;
              <span className="clr-red">
                digital experiences through years of dedicated expertise
              </span>
            </h1>
            <p className="paragraph__section mg-b-32">
              Worked across different industries, from fortune 500 company to
              early aged startups. Learned, mentored and developed experiences
              that helped thousand of users across the globe.
            </p>
            <Button btnType="outline">
              <Link to="/about">Know more about me</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            custom={0.5} // 0.5s delay for the second div
            className="Hero__Image-Container col-6 col-mob-12"
          >
            <div className="Hero__Image-wrapper">
              <img
                className="Hero__Image--bg"
                src={LogoInner}
                alt="portrait picture of Prandeep as hero image"
              />
              <img
                className="Hero__Image--bgCircle"
                src={HeroImageBorderCircleRed}
                alt="dotted circle around hero image"
              />
              <img
                className="Hero__Image--Blurbg"
                src={BlurCircle}
                alt="gradient blur backgorund as a backdrop for the portraint hero image"
              />
              <span className="Hero__State--BBox Hero__State--BBox-Left txt-a-r">
                <p className="fs-sm">7+ years</p>
                <h4>Design Experience</h4>
              </span>
              <span className="Hero__State--BBox Hero__State--BBox-Right txt-a-l">
                <p className="fs-sm">5+ years</p>
                <h4>Development Experience</h4>
              </span>
              <span className="Hero__State--SBox Hero__State--SBox--IXDF">
                IxDF
              </span>
              <span className="Hero__State--SBox Hero__State--SBox--PSM">
                PSM 1
              </span>
              <span className="Hero__State--SBox Hero__State--SBox--PSD">
                PSD 1
              </span>
              <span className="Hero__State--SBox Hero__State--SBox--AZ">
                AZ-900
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <div className="Section-Devider"></div> */}
    </>
  );
};

export default Myprofile;
