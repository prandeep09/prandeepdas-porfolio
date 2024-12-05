import PropTypes from "prop-types";
import { useState } from "react";
import Navbar from "../../components/groups/Navbar";
import Image1 from "../../assets/CS2_S01-min.jpg";
import Image2 from "../../assets/CS2_S02-min.jpg";
import Image3 from "../../assets/CS2_S03-min.jpg";
import Image4 from "../../assets/CS2_S04-min.jpg";
import Image5 from "../../assets/CS2_S05-min.jpg";
import Image6 from "../../assets/CS2_S06-min.jpg";
import Image7 from "../../assets/CS2_S07-min.jpg";
import Image8 from "../../assets/CS2_S08-min.jpg";
import Image9 from "../../assets/CS2_S09-min.jpg";
import Image10 from "../../assets/CS2_S10-min.jpg";
import Modal from "../../components/groups/Modal";
import "./casestudy.css";
const Casestudy = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="casestudy-content">
          <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <picture className="casestudy-onewrapper">
                <img
                  src={Image1}
                  alt="case study title and hero image"
                  loading="lazy"
                />
                <img
                  src={Image2}
                  alt="context and problem statement"
                  loading="lazy"
                />
                <img
                  src={Image3}
                  alt="my role in the project; product designer and developer"
                  loading="lazy"
                />
                <img
                  src={Image4}
                  alt="case study overview explaining solutions and process"
                  loading="lazy"
                />
                <img
                  src={Image5}
                  alt="case study goal and challenges"
                  loading="lazy"
                />
                <img
                  src={Image6}
                  alt="homepage redesign process"
                  loading="lazy"
                />
                <img
                  src={Image7}
                  alt="product page redesign process"
                  loading="lazy"
                />
                <img
                  src={Image8}
                  alt="search feature redesign process"
                  loading="lazy"
                />
                <img
                  src={Image9}
                  alt="dashboard redesign process"
                  loading="lazy"
                />
                <img
                  src={Image10}
                  alt="takeaways and contact details"
                  loading="lazy"
                />
              </picture>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

Casestudy.propTypes = {};

export default Casestudy;
