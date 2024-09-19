const SectionHead = ({ sectionName, sectionDescription }) => {
  return (
    <>
      <article className="sectionHead">
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
