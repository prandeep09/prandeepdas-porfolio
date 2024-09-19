import React from "react";
import Instagram_logo from "../../assets/instagram_logo.svg";
import Dribbble_logo from "../../assets/dribbble_logo.svg";
import Behance_logo from "../../assets/behance_logo.svg";
import LinkedIn_logo from "../../assets/linkedin_logo.svg";
import { Email, Smartphone } from "../../components/atoms/Icon";

const Footer = () => {
  return (
    <>
      <footer id="footerSection" className="footer">
        <article className="footer__top">
          <div className="contact">
            <div className="contact__info">
              <h1 className="heading__L mg-b-24">You can reach out to me at</h1>
              <div className="contact__infoitem">
                <span className="icon--circle">
                  <Email />
                </span>
                <p className="paragraph__hero">prandp.ol09@outlook.com</p>
                {/* <Button btnType="primary" btnIconRight={<Copy />} /> */}
              </div>
              <div className="contact__infoitem">
                <span className="icon--circle">
                  <Smartphone />
                </span>
                <p className="paragraph__hero">+91 97392 77297</p>
                {/* <Button btnType="primary" btnIconRight={<Copy />} /> */}
              </div>
            </div>
            <div className="social__info">
              <a
                href="https://www.behance.net/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram_logo} alt="insagram account link" />
              </a>
              <a
                href="https://www.behance.net/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Dribbble_logo} alt="dribbble account link" />
              </a>
              <a
                href="https://www.behance.net/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Behance_logo} alt="behance account link" />
              </a>
              <a
                href="https://www.behance.net/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn_logo} alt="linkedin account link" />
              </a>
            </div>
          </div>
        </article>
        <article className="footer__bottom">
          © 2024 Prandeep Das. Designed and Developed by me 😎.
        </article>
      </footer>
    </>
  );
};

export default Footer;
