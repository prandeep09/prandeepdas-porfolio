import { Link } from "react-router-dom";
import PorfolioLogoPrimary from "../../assets/Prandeep__Logo-red.svg";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <span className="logo__container">
          <img
            src={PorfolioLogoPrimary}
            className="logo"
            alt="Prandeep Das logo"
          />
          <h3 className="heading__M">I'm Prandeep</h3>
        </span>
      </Link>
    </>
  );
};

export default Logo;
