import { Link } from "react-router-dom";
import PorfolioLogoPrimary from "../../assets/logoPrimary.svg";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={PorfolioLogoPrimary}
          className="logo"
          alt="Prandeep Das logo"
        />
      </Link>
    </>
  );
};

export default Logo;