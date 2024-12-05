import React from "react";
import { motion } from "motion/react";
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
  const { onClick, btnType, btnText, btnIconRight, altClassName, type } = props;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        onClick={onClick}
        title="redirect to case studies"
        className={`button-gen button-${btnType} ${altClassName}`}
        type={type}
      >
        {btnText}
        {btnIconRight ? btnIconRight : null}
      </motion.button>
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

/*
SAMPLE BUTTON>>>>>

<Button
  onClick={handleMenu}
  ref={hamburgerRef}
  btnType="primary"
  btnIconRight={<Menu />}
  altClassName="showMenuBtn"
/>
*/
