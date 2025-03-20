import { motion } from "motion/react";
const SectionHead = ({
  sectionName,
  sectionDescription,
  sectionHighlight = "",
  paddingTop,
  fadeUpVariants,
  viewportSettings,
}) => {
  return (
    <>
      <article className={`sectionHead ${paddingTop}`}>
        <motion.h1
          className="heading__section clr-green-darkest mg-b-8"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          custom={0} // No delay for first div
        >
          {sectionName}
          {sectionHighlight ? (
            <span className="clr-red">{sectionHighlight}</span>
          ) : null}
        </motion.h1>
        <motion.p
          className="paragraph__section"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          custom={0.2} // No delay for first div
        >
          {sectionDescription}
        </motion.p>
      </article>
    </>
  );
};

export default SectionHead;
