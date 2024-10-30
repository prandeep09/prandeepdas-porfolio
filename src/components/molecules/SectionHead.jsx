const SectionHead = ({ sectionName, sectionDescription, paddingTop }) => {
  return (
    <>
      <article className={`sectionHead ${paddingTop}`}>
        <h1 className="heading__section clr-green-darker mg-b-24">
          {sectionName}
          {/* Career Highlights */}
        </h1>
        <p className="paragraph__section">
          {sectionDescription}
          {/* A journey filled with diverse adventures, exploring new realms and
          overcoming unique challenges along the way. */}
        </p>
      </article>
    </>
  );
};

export default SectionHead;
