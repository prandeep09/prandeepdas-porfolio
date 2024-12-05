import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

import Button from "../molecules/Button.jsx";
import Tag from "../atoms/Tag.jsx";
import Modal from "../../components/groups/Modal.jsx";
import cricket_thumbnail from "../../assets/cricket_thumbnail.svg";
import insta_thumbnail from "../../assets/insta_thumbnail.svg";
import more_cases_card_bg from "../../assets/more_cases_card_bg_2.svg";
import casestudyImages from "../../metadata/casestudyimages.js";

const Workcards = () => {
  const [isCS1ModalOpen, setIsCS1ModalOpen] = useState(false);
  const [isCS2ModalOpen, setIsCS2ModalOpen] = useState(false);

  console.log("images", casestudyImages);

  const toggleModal = (id) => {
    if (id === "cs1") {
      setIsCS1ModalOpen(!isCS1ModalOpen);
    } else {
      setIsCS2ModalOpen(!isCS2ModalOpen);
    }
  };

  // const handleOpenPdf = (fileName) => {
  //   window.open(fileName, "_blank");
  // };
  return (
    <>
      <article className="workcard__wrapper">
        <article className="workcard workcard__crick">
          <div className="workcard__head">
            <img src={cricket_thumbnail} alt="" />
          </div>
          <div className="workcard__body">
            <h3 className="heading__M">
              My redesign of a critical feature for Cricket Wirel....
            </h3>
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
              <li>
                Looking for inspiration in places which may not......{" "}
                {/* <Button
                  onClick={() => handleOpenPdf(CricketWirelessPdfFile)}
                  btnType="link"
                  btnText="See complete  case study"
                /> */}
                <Button
                  onClick={() => toggleModal("cs1")}
                  btnType="link"
                  btnText="See complete  case study"
                  type="button"
                />
              </li>
            </ul>
          </div>
          {/* <div className="workcard__footer">
            <Button
              onClick={() => handleOpenPdf(CricketWirelessPdfFile)}
              btnType="outline"
              btnText="See complete  case study"
            />
          </div> */}
        </article>
        <article className="workcard workcard__insta">
          <div className="workcard__head">
            <img src={insta_thumbnail} alt="" />
          </div>
          <div className="workcard__body">
            <h3 className="heading__M">
              How I revamped a B2B website with limited....
            </h3>
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
                It's always good to have more resources, but when you are a solo
                designer, get help form everyone. You may need to coach and...
              </li>
              <li>
                Learning from the best designs available online is valuable when
                you have less experience. However, blindly following...
                {/* <Button
                  onClick={() => handleOpenPdf(InstaFinancialsPdfFile)}
                  btnType="link"
                  btnText="See complete  case study"
                /> */}
                {/* <a
                  href="https://www.behance.net/gallery/213900223/Fintech-Website-redesign-UXUI-Case-study?"
                  target="blank"
                  className="button-gen button-link"
                >
                  See complete case study
                </a> */}
                <Button
                  onClick={() => toggleModal("cs2")}
                  btnType="link"
                  btnText="See complete  case study"
                  type="button"
                />
              </li>
            </ul>
          </div>
          {/* <div className="workcard__footer">
            <Button
              onClick={() => handleOpenPdf(InstaFinancialsPdfFile)}
              btnType="primary"
              btnText="See complete  case study"
            />
          </div> */}
        </article>
      </article>
      <AnimatePresence>
        {isCS1ModalOpen && (
          <Modal isOpen={isCS1ModalOpen} onClose={() => toggleModal("cs1")}>
            <picture className="casestudy-onewrapper">
              {casestudyImages[0]?.imagedata?.map((casestudyImage) => (
                <img
                  key={casestudyImage.id}
                  src={casestudyImage.src}
                  alt={casestudyImage.alt}
                  loading="lazy"
                />
              ))}
            </picture>
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCS2ModalOpen && (
          <Modal isOpen={isCS2ModalOpen} onClose={() => toggleModal("cs2")}>
            <picture className="casestudy-onewrapper">
              {casestudyImages[1]?.imagedata?.map((casestudyImage) => (
                <img
                  key={casestudyImage.id}
                  src={casestudyImage.src}
                  alt={casestudyImage.alt}
                  loading="lazy"
                />
              ))}
            </picture>
          </Modal>
        )}
      </AnimatePresence>
      <article className="workcard--img">
        <img src={more_cases_card_bg} alt="" />
      </article>
    </>
  );
};

export default Workcards;
