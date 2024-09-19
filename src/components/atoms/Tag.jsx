import PropTypes from "prop-types";
import "./atoms.css";

const Tag = ({ tagType, tagName }) => {
  return (
    <>
      <span className={`tag tag--${tagType}`}>{tagName}</span>
    </>
  );
};

Tag.propTypes = {
  tagType: PropTypes.string,
  tagName: PropTypes.string,
};

export default Tag;
