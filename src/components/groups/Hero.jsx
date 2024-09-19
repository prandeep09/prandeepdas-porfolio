import HeroIllustration from "../../assets/Hero_illustration.svg";
import Navbar from "./Navbar";
import Button from "../molecules/Button";
import { CheveronRight } from "../atoms/Icon.jsx";
import "./groups.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {/* NAVBAR */}
        <Navbar />
        {/* HERO SECTION */}
        <article className="hero__wrapper section-wrapper">
          {/* HERO SECTION LEFT */}
          <div className="hero__right-wrapper">
            <h6 className="heading__S mg-b-24">Prandeep Das</h6>
            <h1 className="heading__hero">
              <span className="clr-green-darker ">
                Design & Code Alchemist:
              </span>{" "}
              <span className="clr-orange-darker">
                Crafting User Experiences
              </span>
            </h1>
            <p className="paragraph__hero">
              “Crafting seamless experiences by day, coding pixel-perfect
              websites by night – meet the UX designer who bridges design and
              development.” 🌟💻
            </p>
            <Button
              btnType="primary"
              btnText="See case studies"
              btnIconRight={<CheveronRight color="#f7f7f7" />}
            />
          </div>
          {/* HERO SECTION RIGHT */}
          <div className="hero__left-wrapper">
            <img
              src={HeroIllustration}
              className="hero__illustration"
              alt="an illustration representing three main navigation of the portfolio about, work, contact"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
