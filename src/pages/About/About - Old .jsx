import React, { useRef } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/groups/Navbar";
import Works from "../../components/groups/Works";
import Footer from "../../components/groups/Footer";
import ProfileImage from "../../assets/Profile_image.png";
import ProfileImage_S from "../../assets/Profile_image-S.png";
import FunMe1 from "../../assets/fun_me-1.jpg";
import FunMe2 from "../../assets/fun_me-2.jpg";
import DrawMe from "../../assets/drawing_me.jpg";
import CookingMe from "../../assets/cooking_me.jpg";
import GamingMe from "../../assets/gaming_me.jpg";
import PhotographyMe1 from "../../assets/photography_me-1.jpg";
import PhotographyMe2 from "../../assets/photography_me-2.jpg";
import HeroImage from "../../assets/Hero_image_v3.svg";
import "./About.css";

const About = (props) => {
  return (
    <>
      <div className="about">
        <div className="Blur__Circle--Container">
          <div className="Blur__Circle"></div>
        </div>
        <section className="about__intro section">
          <article className="section-wrapper">
            <Navbar />
            {/* <div className="about__intro-image">
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
            </div> */}
            <div className="About-Intro__Wrapper">
              <div className="About-Intro__ImageBox">
                <img src={HeroImage} alt="" />
              </div>
              <div className="About-Intro__TextBox">
                <h2 className="heading__XL">Prandeep Das</h2>
                <h4 className="heading__S clr-green-darker">
                  UI UX Designer, Developer, Illustrator
                </h4>
                <p className="mg-b-12">
                  I am a Bengaluru based UI/UX designer/developer with 7+ years
                  of development experience, 9+ years of overall experience and
                  a life long experience in design.
                </p>
                <p className="mg-b-12">
                  My diverse experience helps me to understand problems better
                  and find solution more efficiently. My passion for design is
                  not just about finding a better career opportunity, but to
                  become a better empathizer, a better human being.
                </p>
                <p style={{ color: "var(--grey)" }}>
                  The best part about being a generalist is that you know the
                  best and worst part of different areas of the ecosystem. My
                  design skills help me to relate myself with peoples problems
                  and my coding knowledge guide me to think logically and
                  rationally.
                </p>
              </div>
            </div>
            {/* <div className="about__intro-description">
              <h1 className="heading__XL mg-b-24 clr-green-darker">About me</h1>
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
            </div> */}
            {/* <div className="about__stats">
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
            </div> */}
          </article>
        </section>
        <div className="Section-Devider"></div>
        <section className="about__value">
          <article className="section-wrapper about__value--wrapper">
            <div className="about__value--title txt-a-c">
              <h3 className="heading__M">What makes me</h3>
              <h1 className="heading__hero clr-green-darker">Valuable</h1>
            </div>
            <div className="about__value-decriptionBox">
              <div className="about__value-decription">
                <h3 className="heading__M mg-b-12 clr-green-darker">
                  Visual design
                </h3>
                <p>
                  My interest and experience in art and sketching help me in
                  creative thinking and visual representation. Form Posters,
                  flyers, Icons, illustrations to complex enterprise dashboards
                  I have designed everything{" "}
                </p>
              </div>
              <div className="about__value-decription">
                <h3 className="heading__M mg-b-12 clr-orange-darker">
                  UI Development
                </h3>
                <p>
                  Knowledge of coding allows me to work effectively with
                  development teams and ensure that my designs are technically
                  feasible. The rational and logical thinking helps to find more
                  practical solutions.
                </p>
              </div>
              <div className="about__value-decription">
                <h3 className="heading__M mg-b-12 clr-blue-darker">
                  Business understanding
                </h3>
                <p>
                  Apart from my primary responsibilities, I had managed my team,
                  participated in business stakeholder discussions. Understood
                  their requirements and presented work done with analytics
                  data.
                </p>
              </div>
              <div className="about__value-decription">
                <h3 className="heading__M mg-b-12 clr-red-darker">
                  Diverse experience
                </h3>
                <p>
                  Worked across different industries, from fortune 500 company
                  to early aged startups. Worked on different B2B, B2C, and
                  enterprise projects gave me a wide range of opportunity to
                  Learn, mentor and develop experiences that helped thousand of
                  users across the globe.
                </p>
              </div>
            </div>
          </article>
        </section>
        <div className="Section-Devider"></div>
        <section className="about__interest">
          <article className="section-wrapper">
            <h2 className="about__interest--title heading__XL clr-green-darker txt-a-c">
              Personal Interest
            </h2>
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
        <div className="Section-Devider"></div>
        <section className="about__skills">
          <article className="section-wrapper about__skills--wrapper">
            <h2 className="about__skills--title heading__XL clr-green-darker txt-a-c">
              My key skills
            </h2>
            <div className="about__skills-listBox">
              <div className="about__skills-list">
                <h3 className="heading__M  clr-green-darker">Design Skills</h3>
                <ul>
                  <li>User experience (UX)</li>
                  <li>User interface (UI)</li>
                  <li>User research</li>
                  <li>Prototyping</li>
                  <li>Wireframing</li>
                  <li>Design systems</li>
                  <li>Accessibility</li>
                  <li>Data Driven Design</li>
                </ul>
              </div>
              <div className="about__skills-list">
                <h3 className="heading__M clr-blue-darker">Soft Skills</h3>
                <ul>
                  <li>Collaboration</li>
                  <li>Business communication</li>
                  <li>Critical thinking & Problem-solving</li>
                  <li>Creativity</li>
                  <li>Ethics</li>
                  {/* <li>Attention to detail</li>
                  <li>Ability to work under pressure</li>
                  <li>Ability to meet deadlines</li> */}
                  <li>Team management</li>
                  <li>Leadership</li>
                  <li>Mentorship</li>
                </ul>
              </div>
              <div className="about__skills-list">
                <h3 className="heading__M  clr-orange-darker">
                  Technical Skills
                </h3>
                <ul>
                  <li>Figma</li>
                  <li>Affinity Designer</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>FullStory</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>API</li>
                </ul>
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
