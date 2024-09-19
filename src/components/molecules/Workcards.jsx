import Button from "../molecules/Button.jsx";
import Tag from "../atoms/Tag.jsx";
import cricket_thumbnail from "../../assets/cricket_thumbnail.svg";
import insta_thumbnail from "../../assets/insta_thumbnail.svg";
import more_cases_card_bg from "../../assets/more_cases_card_bg.svg";
import CricketWirelessPdfFile from "../../assets/Case_study-CSS.pdf";
import InstaFinancialsPdfFile from "../../assets/Case_study_IF.pdf";

const Workcards = () => {
  const handleOpenPdf = (fileName) => {
    window.open(fileName, "_blank");
  };

  return (
    <>
      <article className="workcard__wrapper">
        <article className="workcard workcard__crick">
          <div className="workcard__head">
            <img src={cricket_thumbnail} alt="" />
          </div>
          <div className="workcard__body">
            <h3>My redesign of a critical feature for Cricket Wirel....</h3>
            <div className="workcard__tags--wrapper">
              <span className="tag tag--warning">#Dev</span>
              <span className="tag tag--success">#UX</span>
              <span className="tag tag--success">#UI</span>
              <span className="tag tag--info">#Enterprise_web</span>
            </div>
            <p className="paragraph__small">
              Key takeaways of this case study are:{" "}
            </p>
            <ul className="paragraph__small workcard__description">
              <li>
                keeping constant touch with the stakeholder, and testing your
                ideas at every step has real compounding effect on your
                solution.
              </li>
              <li>Looking for inspiration in places which may not......</li>
            </ul>
          </div>
          <div className="workcard__footer">
            <Button
              onClick={() => handleOpenPdf(CricketWirelessPdfFile)}
              btnType="outline"
              btnText="See complete  case study"
            />
          </div>
        </article>
        <article className="workcard workcard__insta">
          <div className="workcard__head">
            <img src={insta_thumbnail} alt="" />
          </div>
          <div className="workcard__body">
            <h3>How I revamped a B2B website with limited....</h3>
            <div className="workcard__tags--wrapper">
              <Tag tagType="warning" tagName="#Dev" />
              <Tag tagType="success" tagName="#UX" />
              <Tag tagType="success" tagName="#UI" />
              <Tag tagType="info" tagName="#B2B_web" />
            </div>
            <p className="paragraph__small">
              Key takeaways of this case study are:{" "}
            </p>
            <ul className="paragraph__small workcard__description">
              <li>
                While having more resources is always beneficial, when that’s
                not an option, it's wise to leverage whatever help you can get
                from cross-functional teammates. You may need to coach and...
              </li>
            </ul>
          </div>
          <div className="workcard__footer">
            <Button
              onClick={() => handleOpenPdf(InstaFinancialsPdfFile)}
              btnType="outline"
              btnText="See complete  case study"
            />
          </div>
        </article>
        <article className="workcard" style={{ cursor: "not-allowed" }}>
          <div className="workcard__head">
            <img src={more_cases_card_bg} alt="" />
          </div>
        </article>
      </article>
    </>
  );
};

export default Workcards;
