import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";

const Card = ({
  fadeUpVariants = "",
  viewportSettings = "",
  custom = ".1",
  content,
}) => {
  const {
    appname,
    apptype,
    casetitile,
    casedescription,
    caselinktext,
    companyname,
    year,
    avatar,
    caselink,
    image1,
    image2,
    background,
  } = content;
  return (
    <>
      <Link to={caselink} className="col-6 col-mob-12">
        <motion.div
          className="card"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          custom={custom} // No delay for first div
        >
          <div className={`card__head ${background}`}>
            <h3 className="heading__L">{appname}</h3>
            <p className="paragraph__hero">{apptype}</p>
            <img src={image1} alt="change subscriber status old UI" />
            <img src={image2} alt="change subscriber status new UI" />
          </div>
          <div className="card__body">
            <div className="mg-b-32">
              <h3 className="heading__M mg-b-8">{casetitile}</h3>
              <p className="paragraph__section">
                {casedescription}{" "}
                <p className="txt-decor clr-red">{caselinktext}</p>{" "}
              </p>
            </div>
            <Avatar image={avatar} title={companyname} description={year} />
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default Card;
