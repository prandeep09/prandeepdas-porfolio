import Instagram_logo from "../../assets/instagram_logo.svg";
import Dribbble_logo from "../../assets/dribbble_logo.svg";
import Behance_logo from "../../assets/behance_logo.svg";
import LinkedIn_logo from "../../assets/linkedin_logo.svg";
import PhoneIcon from "../../assets/phone.svg";
import EmailIcon from "../../assets/mail.svg";
import { Email, Smartphone } from "../../components/atoms/Icon";

const Footer = () => {
  return (
    <>
      <footer id="footerSection" className="footer">
        <article className="section-wrapper">
          <div className="Footer__Container">
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
                  <li>
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
