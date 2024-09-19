import React, { useRef } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/groups/Navbar";
import Works from "../../components/groups/Works";
import Footer from "../../components/groups/Footer";
import ProfileImage from "../../assets/Profile_image.png";
import ProfileImage_S from "../../assets/Profile_image-S.png";
import FunMe1 from "../../assets/fun_me-1.jpg";
import FunMe2 from "../../assets/fun_me-2.jpg";
import CookingMe from "../../assets/cooking_me.jpg";
import GamingMe from "../../assets/gaming_me.jpg";
import PhotographyMe1 from "../../assets/photography_me-1.jpg";
import PhotographyMe2 from "../../assets/photography_me-2.jpg";
import "./About.css";

const About = (props) => {
  return (
    <>
      <div className="about">
        <section className="about__intro section">
          <article className="section-wrapper">
            {/* TODO: uncomment and make it responsive */}
            <Navbar />
            <div className="about__intro-image">
              <img
                className="about__introImage--XL"
                src={ProfileImage}
                alt=""
              />
              <img
                className="about__introImage--S"
                src={ProfileImage_S}
                alt=""
              />
            </div>
            <div className="about__intro-description">
              <h1 className="heading__XL mg-b-24">About me</h1>
              <p className="mg-b-12">
                I am a UI/UX designer/developer with 6+ years of development
                experience, 9+ years of overall experience and a life long
                experience in design.
              </p>
              <p className="mg-b-20">
                My diverse experience helps me to understand problems better and
                find solution more efficiently. My passion for design is not
                just about finding a better career opportunity, but to become a
                better empathizer, a better human being.
              </p>
              <p style={{ color: "var(--grey)" }}>
                The best part about being a generalist is that you know the best
                and worst part of different areas of the ecosystem. My design
                skills help me to relate myself with peoples problems and my
                coding knowledge guide me to think logically and rationally.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__statsBox">
                <h5 className="heading__S">200+</h5>
                <p>Marketing designs</p>
              </div>
              <div className="about__statsBox">
                <h5 className="heading__S">100+</h5>
                <p>Icon designs</p>
              </div>
              <div className="about__statsBox">
                <h5 className="heading__S">50+</h5>
                <p>Webpage creation</p>
              </div>
              <div className="about__statsBox">
                <h5 className="heading__S">6+ Years</h5>
                <p>Design experience</p>
              </div>
              <div className="about__statsBox">
                <h5 className="heading__S">6+ Years</h5>
                <p>Development experience</p>
              </div>
              <div className="about__statsBox">
                <h5 className="heading__S">9+ Years</h5>
                <p>Overall experience</p>
              </div>
            </div>
          </article>
        </section>
        <section className="about__value">
          <article className="section-wrapper about__value--wrapper">
            <div className="about__value--title ">
              <h3>What makes me</h3>
              <h1 className="heading__XL">Valuable</h1>
            </div>
            <div className="about__value-decriptionBox">
              <div className="about__value-decription">
                <h4 className="heading__S mg-b-12">Visual design</h4>
                <p>
                  My interest and experience in art and sketching help me in
                  creative thinking and visual representation. Form Posters,
                  flyers, Icons, illustrations to complex enterprise dashboards
                  I have designed everything{" "}
                </p>
              </div>
              <div className="about__value-decription">
                <h4 className="heading__S mg-b-12">Coding</h4>
                <p>
                  Knowledge of coding allows me to work effectively with
                  development teams and ensure that my designs are technically
                  feasible. The rational and logical thinking helps to find more
                  practical solutions.
                </p>
              </div>
              <div className="about__value-decription">
                <h4 className="heading__S mg-b-12">Diverse experience</h4>
                <p>
                  Worked across different industries, from fortune 500 company
                  to early aged startups. Worked on different B2B, B2C, and
                  enterprise projects gave me a wide range of opportunity to
                  Learn, mentor and develop experiences that helped thousand of
                  users across the globe.
                </p>
              </div>
              <div className="about__value-decription">
                <h4 className="heading__S mg-b-12">Business understanding</h4>
                <p>
                  Apart from my primary responsibilities, I had managed my team,
                  participated in business stakeholder discussions. Understood
                  their requirements and presented work done with analytics
                  data.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="about__interest">
          <article className="section-wrapper about__interest--wrapper">
            <h2 className="heading__XL">Personal Interest</h2>
            <div className="about__interest--info">
              <div className="about__interst--list">
                <p>Drawing</p>
                <p>Playing Cricket</p>
                <p>Photography</p>
                <p>Badminton</p>
                <p>Video games</p>
                <p>Cooking</p>
              </div>
              <div className="about__image--list">
                <img src={FunMe1} alt="" />
                <img src={CookingMe} alt="" />
                <img src={GamingMe} alt="" />
                <img src={FunMe2} alt="" />
                <img src={PhotographyMe1} alt="" />
                <img src={PhotographyMe2} alt="" />
              </div>
            </div>
          </article>
        </section>

        <section className="about__skills">
          <article className="section-wrapper about__skills--wrapper">
            <h1 className="about__skills--title heading__XL">My key skills</h1>
            <div className="about__skills--description">
              <div className="about__skills--descriptionBox">
                <h4 className="heading__S mg-b-12">Design Skills</h4>
                <p>
                  User experience (UX), User interface (UI), User research,
                  Prototyping, Wireframing, Design systems, Accessibility
                </p>
              </div>
              <div className="about__skills--descriptionBox">
                <h4 className="heading__S mg-b-12">Soft skills</h4>
                <p>
                  Collaboration, Communication, Problem-solving, Creativity,
                  Attention to detail, Ability to work under pressure, Ability
                  to meet deadlines, Ability to work independently and as part
                  of a team
                </p>
              </div>
              <div className="about__skills--descriptionBox">
                <h4 className="heading__S mg-b-12">Technical skills</h4>
                <p>
                  Figma, Illustrator, Photoshop, Affinity Designer, HTML, CSS,
                  JavaScript, React, Node, FullStory
                </p>
              </div>
            </div>
          </article>
        </section>

        <Works />

        <Footer />
      </div>
    </>
  );
};

About.propTypes = {};

export default About;
