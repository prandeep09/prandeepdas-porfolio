import { motion } from "motion/react";
import HeroIllustration from "../../assets/Hero_illustration.svg";
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
        <div className="Blur__Circle--Container">
          <div className="Blur__Circle"></div>
        </div>
        {/* NAVBAR */}
        <Navbar />
        {/* HERO SECTION */}
        {/* OLD */}
        {/* <article className="hero__wrapper section-wrapper">
          <div className="hero__right-wrapper">
            <h6 className="heading__S mg-b-24">Prandeep Das</h6>
            <h1 className="heading__hero mg-b-24">
              <span className="clr-green-darker ">
                Design & Code Alchemist: Crafting User Experiences
              </span>
            </h1>
            <p className="paragraph__hero mg-b-24">
              “Crafting seamless experiences by day, coding pixel-perfect
              websites by night – meet the UX designer who bridges design and
              development.” 🌟💻
            </p>
            <a href="#sectionWork" className="button-gen button-primary">
              See case studies
            </a>
          </div>
          <div className="hero__left-wrapper">
            <img
              src={HeroIllustration}
              className="hero__illustration"
              alt="an illustration representing three main navigation of the portfolio about, work, contact"
            />
          </div>
        </article> */}

        {/* NEW */}
        <article className="hero__wrapper section-wrapper">
          <div className="hero__text-container">
            <motion.h4
              // initial={{ y: 100, opacity: 0 }}
              // animate={{ y: 0, opacity: 1 }}
              // transition={{ duration: 0.6, delay: 0, ease: "linear" }}
              variants={fadeUPVariants}
              initial="hidden"
              animate="show"
              className="heading__M clr-grey-dark"
            >
              I'm Prandeep Das, a<span></span>
            </motion.h4>
            <motion.h1
              variants={fadeUPVariants}
              initial="hidden"
              animate="show"
              className="heading__hero txt-a-c mg-b-8 type-annimation"
            >
              <span></span> with a 360° View
            </motion.h1>
            <motion.p
              variants={fadeUPVariants}
              initial="hidden"
              animate="show"
              className="paragraph__hero"
            >
              Meet the Product Alchemist who balances Design, Development <br />{" "}
              & Business.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUPVariants}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="Hero__Image-Container"
          >
            <div className="Hero__Image-wrapper">
              <img
                className="Hero__Image--bg"
                src={HeroImage}
                alt="portrait picture of Prandeep as hero image"
              />
              <img
                className="Hero__Image--bgCircle"
                src={HeroImageBorderCircle}
                alt="dotted circle around hero image"
              />
              <img
                className="Hero__Image--Blurbg"
                src={BlurBg}
                alt="gradient blur backgorund as a backdrop for the portraint hero image"
              />
              <span className="Hero__State--BBox Hero__State--BBox-Left txt-a-r">
                <p className="fs-sm">7+ years</p>
                <h4>Design Experience</h4>
              </span>
              <span className="Hero__State--BBox Hero__State--BBox-Right txt-a-l">
                <p className="fs-sm">7+ years</p>
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
        </article>
        <div className="Section-Devider">
          {/* <img src={SectionDevider} alt="A section devider" /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
