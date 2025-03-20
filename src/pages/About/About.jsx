import React, { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../../components/groups/Navbar";
import {
  fadeUpVariants,
  viewportSettings,
} from "../../utils/framerAnimation.jsx";
import ProfileImageAboutme from "../../assets/image- about me profile image.svg";
import Button from "../../components/molecules/Button";
import ProfDemography from "../../assets/Professional demography.svg";
import ExpAmazon from "../../assets/Experience amazon.svg";
import ExpIvoyant from "../../assets/Experience ivoyant.svg";
import ExpInstaFinancials from "../../assets/Experience instafinancials.svg";
import toolsImage from "../../assets/Tools.svg";
import FunMe1 from "../../assets/fun_me-1.jpg";
import FunMe2 from "../../assets/fun_me-2.jpg";
import DrawMe from "../../assets/drawing_me.jpg";
import CookingMe from "../../assets/cooking_me.jpg";
import GamingMe from "../../assets/gaming_me.jpg";
import PhotographyMe1 from "../../assets/photography_me-1.jpg";
import PhotographyMe2 from "../../assets/photography_me-2.jpg";
import devKnowledge from "../../assets/dev knowledge.svg";
import visualKnowledge from "../../assets/visual design.svg";
import agileKnowledge from "../../assets/agile exp.svg";
import "./About.css";

//CSS
import "./About.css";
import SelectedWorks from "../../components/groups/SelectedWorks";
import { Link } from "react-router-dom";

const About = () => {
  const [showPersonalSection, setShowPersonalSection] = useState(false);
  return (
    <div>
      <Navbar />
      <section className="section-wrapper hero__about txt-a-c flex-center flex-direction-col">
        <div>
          <motion.img
            src={ProfileImageAboutme}
            alt="my profile image"
            className="mg-b-24"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            custom={0}
          />
          <motion.h1
            className="heading__XL mg-b-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            custom={0.5}
          >
            Prandeep Das
          </motion.h1>
          <motion.p
            className="paragraph__hero mg-b-40 hw"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            custom={1}
          >
            Hi, I am a Bengaluru based senior product designer. My design powers
            are{" "}
            <strong>
              Visual design, Agile knowledge & Frontend experience
            </strong>{" "}
            .{" "}
          </motion.p>
          <div>
            <svg
              width="33"
              height="37"
              viewBox="0 0 33 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0V35.5M16.5 35.5L32 20M16.5 35.5L1 20"
                stroke="#FAA5A8"
              />
            </svg>
          </div>
        </div>
      </section>
      <div className="Section-Devider"></div>
      <section className="section-wrapper">
        <h2 className="heading__L txt-a-c mg-b-8 pd-t-96">
          Want to know my personas?
        </h2>
        <p className="paragraph__hero txt-a-c mg-b-32">
          Get a glimpse of my professional experience and personal interests
          through my personas
        </p>
        <div className="flex-center gap-16 mg-b-48">
          <Button
            onClick={() => setShowPersonalSection(false)}
            btnType={`${!showPersonalSection ? "primary" : "outline"} `}
          >
            Professional
          </Button>
          <Button
            onClick={() => setShowPersonalSection(true)}
            btnType={`${showPersonalSection ? "primary" : "outline"} `}
            // btnType="outline"
          >
            Personal
          </Button>
        </div>
      </section>
      {!showPersonalSection && (
        <>
          <section className="pd-b-72">
            <div className="about__prof-grid">
              <div>
                <h5 className="heading__S mg-b-24">Demography</h5>
                <img
                  src={ProfDemography}
                  alt="My location is Bangalore, total experience 8.9 years and design experience 6 years"
                />
              </div>
              <div className="about__prof-org">
                <h5 className="heading__S">Organizations</h5>
                <div className="about__Prof-org--t2">
                  <Link to="/casestudy01">
                    {" "}
                    <img
                      src={ExpIvoyant}
                      alt="Cricket wireless logo"
                      className="hover"
                    />
                  </Link>
                  <Link to="/casestudy01">
                    {" "}
                    <img
                      src={ExpInstaFinancials}
                      alt="InstaFinancials logo"
                      className="hover"
                    />
                  </Link>
                </div>
                <div className="about__Prof-org-t3">
                  <img src={ExpAmazon} alt="" />
                </div>
                <div className="about__tools">
                  <h5 className="heading__S mg-b-16">Tools</h5>
                  <img src={toolsImage} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </section>
          <section className="pd-b-72">
            <div className="section-wrapper">
              <div className="mg-b-64">
                <h2 className="heading__L">What makes me</h2>
                <h2 className="heading__XL clr-red">Valuable</h2>
              </div>
              <div className="d-flex flex-wrap justify-between">
                <div className="col-4 col-mob-12">
                  <img src={visualKnowledge} alt="" className="mg-b-20" />
                  <h4 className="heading__S mg-b-20">
                    Visual <br />
                    design
                  </h4>
                  <p className="paragraph__section mg-b-20">
                    My interest and experience in art and sketching helps me in
                    creative thinking and visual representation. From posters,
                    flyers, Icons, illustrations to complex enterprise
                    dashboards I have designed everything.{" "}
                  </p>
                </div>
                <div className="col-4 col-mob-12">
                  <img src={devKnowledge} alt="" className="mg-b-20" />
                  <h4 className="heading__S mg-b-20">
                    UI Development <br />
                    Knowledge
                  </h4>
                  <p className="paragraph__section mg-b-20">
                    Knowledge of coding allows me to work effectively with
                    development teams and ensure that my designs are technically
                    feasible. The rational and logical thinking helps to find
                    more practical solutions.
                  </p>
                </div>
                <div className="col-4 col-mob-12">
                  <img src={agileKnowledge} alt="" className="mg-b-20" />
                  <h4 className="heading__S mg-b-20">
                    Agile <br />
                    Experience
                  </h4>
                  <p className="paragraph__section mg-b-20">
                    Certifications like PSM and PSD have strengthened my ability
                    to work seamlessly within Agile teams. They help me refine
                    user stories, improve collaboration, and ensure my UI/UX
                    designs align with iterative delivery and user-focused
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {showPersonalSection && (
        <section className="pd-b-72">
          <article className="section-wrapper">
            <p className="about__personal-description">
              I was born and raised in <strong>Assam</strong>, a beautiful state
              in northeastern
              <strong> India </strong> renowned for its lush tea gardens and
              stunning landscapes. I enjoy <strong> drawing 🎨 </strong> in my
              free time, and my passion for <strong>photography 📸 </strong>
              often makes me the go-to photographer among my friends.{" "}
              <strong>Cooking 👨🏻‍🍳 </strong>
              special dishes brings me joy, while <strong>
                gaming 🎮🏏{" "}
              </strong>{" "}
              helps me stay connected to my inner child. These hobbies enrich my
              life and keep my curiosity about the world alive.
            </p>
            <div className="about__image--list-row">
              <div className="about__image--list-col">
                <div>
                  <p>A proof that I can draw 😆</p>
                  <img src={DrawMe} alt="" />
                </div>
                <div>
                  <p>I can cook too.. 👨🏽‍🍳</p>
                  <img src={CookingMe} alt="" />
                </div>
                <div>
                  <p>Planned for years, achieved in 2023 😅</p>
                  <img src={FunMe1} alt="" />
                </div>
              </div>
              <div className="about__image--list-col">
                <div>
                  <p>They pose better than me 🌼</p>
                  <img src={PhotographyMe1} alt="" />
                </div>
                <div>
                  <p>A click from Gulliver's travel</p>
                  <img src={PhotographyMe2} alt="" />
                </div>
              </div>
              <div className="about__image--list-col">
                <div>
                  <p>All gamer’s dream place 🎮 </p>
                  <img src={GamingMe} alt="" />
                </div>
                <div>
                  <p>Let me know if you’r going for a hike..</p>
                  <img src={FunMe2} alt="" />
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
      <div className="Section-Devider"></div>
      <SelectedWorks />
    </div>
  );
};

export default About;
