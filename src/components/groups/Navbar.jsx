import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../molecules/Logo";
import Button from "../molecules/Button";
import { Menu } from "../../components/atoms/Icon.jsx";
import "./groups.css";

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const handleMenu = () => {
    // event.stopPropagation();
    // setShowMenue(!showMenue);
    setShowMenue((prevMenuOpen) => !prevMenuOpen);
  };
  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("event.target", event.target);
      console.log("menuRef.current", menuRef.current);
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setShowMenue(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuItemClick = () => {
    setShowMenue(false);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          {/* LOGO */}
          <Logo />

          {/* LINKS */}
          <ul className="nav__links">
            <li className="heading__S">
              <Link to="/about">About</Link>
            </li>
            <li className="heading__S">
              <a href="#sectionWork">Work</a>
            </li>
            {/* <li className="heading__S">
              <Link to="/portfolio">portfolio</Link>
            </li> */}
            <li className="heading__S">Contact</li>
          </ul>
          <Button
            onClick={handleMenu}
            ref={hamburgerRef}
            btnType="primary"
            btnIconRight={<Menu />}
            altClassName="showMenuBtn"
          />
          {/* <div className="hamburger" onClick={handleMenu} ref={hamburgerRef}>
            &#9776;
          </div> */}
          <article
            className={showMenue ? `menu__dropdown  show` : `menu__dropdown`}
            ref={menuRef}
          >
            <ul>
              <li className="heading__S">
                <Link onClick={handleMenuItemClick} to="/about">
                  About
                </Link>
              </li>
              <li className="heading__S">
                <a onClick={handleMenuItemClick} href="#sectionWork">
                  Work
                </a>
              </li>
              <li className="heading__S">
                <a onClick={handleMenuItemClick} href="#footerSection">
                  Contact
                </a>
              </li>
            </ul>
          </article>
        </div>
      </nav>
    </>
  );
};

export default Navbar;