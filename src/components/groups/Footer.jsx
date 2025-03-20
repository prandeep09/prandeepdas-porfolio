import { useState } from "react";
import { motion } from "motion/react";
import Instagram_logo from "../../assets/instagram_logo.svg";
import Dribbble_logo from "../../assets/dribbble_logo.svg";
import Behance_logo from "../../assets/behance_logo.svg";
import LinkedIn_logo from "../../assets/linkedin_logo.svg";
import BlurCircle from "../../assets/blur-circle.svg";
import PhoneIcon from "../../assets/phone.svg";
import EmailIcon from "../../assets/mail.svg";
import { Email, Smartphone, Copy } from "../../components/atoms/Icon";
import contentCopy from "../../assets/Content_copy.svg";
import SectionHead from "../molecules/SectionHead";
import sectionData from "../../metadata/sectionData";
import Button from "../molecules/Button";
import "./groups.css";

const Footer = () => {
  const [copied, setCopied] = useState("");
  const email = "prandeepdas.jobs24@gmail.com";
  const phone = "9739277297";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000); // Clear the feedback message after 2 seconds
    });
  };

  return (
    <>
      <footer id="footerSection" className="footer">
        <article className="section-wrapper">
          {/* <div className="Footer__Container">
            <h2 className="heading__L txt-a-c">You can reach out to me at</h2>
            <div className="Footer__Content">
              <div className="Footer__Content--Contact">
                <ul>
                  <li>
                    <img src={EmailIcon} alt="" />
                  </li>
                  <li>prandp.ol09@outlook.com</li>
                </ul>
                <ul>
                  <li>
                    <img src={PhoneIcon} alt="" />
                  </li>
                  <li>97392 77297</li>
                </ul>
              </div>
              <div className="Footer__Content--Social">
                <ul>
                  <li style={{ display: "none" }}>
                    <a
                      href="https://www.instagram.com/empathytodesign/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Instagram_logo} alt="instagram account link" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/Prandeep_Das000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Dribbble_logo} alt="dribbble account link" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/prandeepdas1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Behance_logo} alt="behance account link" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/prandeep-das/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedIn_logo} alt="linkedin account link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <SectionHead
            sectionName={sectionData[2]?.sectionName}
            sectionDescription={sectionData[2]?.sectionDescription}
            paddingTop="pd-t-72"
          />
          <div className="footer-devider"></div>
          <div className="footer-contact-container d-flex flex-wrap gap-48 pd-b-xxl">
            <div className="footer-contact__category">
              <span className="label__M">EMAIL</span>
              <div className="footer-contact__info d-flex">
                <span className="heading__S">{email}</span>
                <button onClick={() => handleCopy(email)}>
                  <Copy color={`${copied ? "#378c05" : "#f64c53"}`} />
                  {copied === email && (
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "green",
                        display: "block",
                      }}
                    >
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="footer-contact__category">
              <span className="label__M">PHONE</span>
              <div className="footer-contact__info d-flex">
                <span className="heading__S">{phone}</span>
                <button onClick={() => handleCopy(phone)}>
                  <Copy color={`${copied ? "#378c05" : "#f64c53"}`} />
                  {copied === phone && (
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "green",
                        display: "block",
                      }}
                    >
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="footer__social mg-b-40">
            <span className="label__M mg-b-12 d-block">SOCIAL</span>
            <div className="footer__social-links">
              <a
                href="https://www.instagram.com/empathytodesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-none"
              >
                <img src={Instagram_logo} alt="instagram account link" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prandeep-das/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn_logo} alt="linkedin account link" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.behance.net/prandeepdas1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Behance_logo} alt="behance account link" />
                <span>Behence</span>
              </a>
              <a
                href="https://dribbble.com/Prandeep_Das000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Dribbble_logo} alt="dribbble account link" />
                <span>Dribbble</span>
              </a>
            </div>
          </div>
        </article>
        <div className="footer__bottom">
          <div>
            <a href="#">Go to start ↑</a>
            <p>
              Copyright © 2025 Prandeep Das. Designed and Developed by me
              😎💖🚀.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
