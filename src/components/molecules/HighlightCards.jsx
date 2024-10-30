import CardIllustration1 from "../../assets/Industry_highlight_illustration.svg";
import CardIllustration2 from "../../assets/Design_highlight_illustration.svg";
import CardIllustration3 from "../../assets/Dev_highlight_illustration.svg";

const HighlightCards = () => {
  return (
    <>
      <article className="HighlightCard__Container">
        <div className="HighlightCard__Wrapper">
          <div className="HighlightCard__ImageBox">
            <img src={CardIllustration1} alt="" />
          </div>
          <div className="HighlightCard__TextBox">
            <h4 className="heading__S clr-blue-dark">9+ Years</h4>
            <h3 className="heading__M">Industry Experience</h3>
            <p>
              Worked across different industries, from fortune 500 company to
              early aged startups. Learned, mentored and developed experiences
              that helped thousand of users across the globe.
            </p>
          </div>
        </div>
        <div className="HighlightCard__Wrapper">
          <div className="HighlightCard__ImageBox">
            <img src={CardIllustration2} alt="" />
          </div>
          <div className="HighlightCard__TextBox">
            <h4 className="heading__S clr-green-dark">7+ Years</h4>
            <h3 className="heading__M">Design Experience</h3>
            <p>
              A self-taught designer. Fortunate enough to explore design from
              all possible fronts. Form Icons, illustrations to complex
              enterprise dashboards. You name it I made it.
            </p>
          </div>
        </div>
        <div className="HighlightCard__Wrapper">
          <div className="HighlightCard__ImageBox">
            <img src={CardIllustration3} alt="" />
          </div>
          <div className="HighlightCard__TextBox">
            <h4 className="heading__S clr-orange-dark">6+ Years</h4>
            <h3 className="heading__M">Development Experience</h3>
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

export default HighlightCards;
