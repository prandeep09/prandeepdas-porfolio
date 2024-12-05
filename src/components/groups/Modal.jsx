import { motion, AnimatePresence } from "motion/react";
import Button from "../molecules/Button";
import { Cross } from "../atoms/Icon.jsx";
import "./groups.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>
          X
        </button> */}
        <Button
          onClick={onClose}
          btnType="primary"
          btnIconRight={<Cross />}
          altClassName="close-button"
        />
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
// {`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`}
