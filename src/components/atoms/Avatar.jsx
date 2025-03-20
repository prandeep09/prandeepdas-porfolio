import React from "react";

const Avatar = ({ image, title, description }) => {
  return (
    <>
      <div className="d-flex gap-8">
        <img src={image} alt="Cricket wireless icon" />
        <div>
          <h4 className="paragraph__small fw-bold">{title}</h4>
          <p className="paragraph__small">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Avatar;
