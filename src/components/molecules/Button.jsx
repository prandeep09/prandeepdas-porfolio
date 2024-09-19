import React from "react";
import PropTypes from "prop-types";
import "./molecules.css";

// const Button = ({
//   onClick,
//   btnType,
//   btnText,
//   btnIconRight,
//   iconColor,
//   altClassName,
// }) => {
//   return (
//     <>
//       <button
//         onClick={onClick}
//         type="button"
//         title="redirect to case studies"
//         className={`button-gen button-${btnType} ${altClassName}`}
//       >
//         {btnText}
//         {btnIconRight ? btnIconRight : null}
//       </button>
//     </>
//   );
// };
const Button = React.forwardRef((props, ref) => {
  const { onClick, btnType, btnText, btnIconRight, altClassName } = props;

  return (
    <>
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        title="redirect to case studies"
        className={`button-gen button-${btnType} ${altClassName}`}
      >
        {btnText}
        {btnIconRight ? btnIconRight : null}
      </button>
    </>
  );
});

Button.prototype = {
  props: PropTypes.object,
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
