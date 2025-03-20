import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation
import PropTypes from "prop-types";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginRight: "8px" }}>
            {index < items.length - 1 ? (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "#f64c53" }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "black" }}>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span style={{ margin: "0 8px" }}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Prop type validation
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
