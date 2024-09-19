import CardIllustration1 from "../../assets/Industry_highlight_illustration.svg";
import CardIllustration2 from "../../assets/Design_highlight_illustration.svg";
import CardIllustration3 from "../../assets/Dev_highlight_illustration.svg";

const Cards = () => {
  return (
    <>
      <article className="card__wrapper">
        <div className="card">
          <div className="card__head">
            <img src={CardIllustration1} alt="" />
          </div>
          <div className="card__body">
            <h3 className="heading__L clr-green-darker">
              9+ <span className="heading__S">Years</span>
            </h3>
            <h4>Industry Highlight</h4>
            <p>
              Worked across different industries, from fortune 500 company to
              early aged startups. Learned, mentored and developed experiences
              that helped thousand of users across the globe.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__head">
            <img src={CardIllustration2} alt="" />
          </div>
          <div className="card__body">
            <h3 className="heading__L clr-green-darker">
              6+ <span className="heading__S">Years</span>
            </h3>
            <h4>Design Highlight</h4>
            <p>
              A self-taught designer. Fortunate enough to explore design from
              all possible fronts. Form Icons, illustrations to complex
              enterprise dashboards. You name it I made it.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__head">
            <img src={CardIllustration3} alt="" />
          </div>
          <div className="card__body">
            <h3 className="heading__L clr-green-darker">
              6+ <span className="heading__S">Years</span>
            </h3>
            <h4>Developlment Highlight</h4>
            <p>
              Developing and converting functional pixel perfect user
              experiences since years. From marketing pages to enterprise
              applications, from development to deployment; have experienced
              everything.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Cards;
