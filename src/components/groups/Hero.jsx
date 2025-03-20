import { motion } from "motion/react";
import { Link } from "react-router-dom";
import HeroIllustration from "../../assets/Hero_illustration.svg";
import BlurCircle from "../../assets/blur-circle.svg";
import HeroImage from "../../assets/Hero_image_v3.svg";
import HeroImageBorderCircle from "../../assets/Hero_circle.svg";
import BlurBg from "../../assets/blur_bg.svg";
import SectionDevider from "../../assets/Section-Devider.svg";
import Navbar from "./Navbar";
import Button from "../molecules/Button";
import { CheveronRight } from "../atoms/Icon.jsx";
import "./groups.css";
import "../../CSS/animation.css";
import { delay } from "motion";
import AmazonLogo from "../../assets/Amazon_logo.svg";
import InstaFinLogo from "../../assets/if1.svg";
import IvoyantLogo from "../../assets/ivoyant.svg";
import CricketLogo from "../../assets/cricket-wireless.svg";

const Hero = () => {
  const fadeUPVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };
  return (
    <>
      <section className="hero">
        <motion.div
          className="Blur__Circle--Container"
          variants={fadeUPVariants}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
        >
          <img src={BlurCircle} alt="" />
        </motion.div>
        <Navbar />

        {/* HERO MAIN SECTION */}

        {/* NEW */}
        <motion.div
          className="hero__wrapper section-wrapper"
          variants={fadeUPVariants}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <h1 className="heading__hero mg-b-8 zi-1">
            Design Enthusiast:&nbsp;
            <span className="clr-red">
              Bridging the gap between design and development
            </span>
          </h1>
          <p className="paragraph__hero mg-b-32">
            I am UI UX designer who understands opportunities and transform them
            into seamless experiences
          </p>
          <Button btnType="outline" altClassName="zi-1">
            <a href="#sectionWork">See case studies</a>
          </Button>
          <div className="Hero__Company">
            <div className="Hero__Company--Container">
              <div className="Hero__Company--logoBox">
                <img src={AmazonLogo} alt="Amazon logo" />
              </div>
              <div className="Hero__Company--logoBox">
                <img src={InstaFinLogo} alt="Instafiancials logo" />
              </div>
              <div className="Hero__Company--logoBox">
                <img src={IvoyantLogo} alt="Ivoyant logo" />
              </div>
              <div className="Hero__Company--logoBox">
                <img src={CricketLogo} alt="Cricket wireless logo" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="Section-Devider"></div>
      </section>
    </>
  );
};

export default Hero;
