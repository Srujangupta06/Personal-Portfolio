import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <AnchorLink href="#home-section" className="anchor-link">
        <div className="logo-container">
          <h2 className="logo-first-letter">
            S<span className="logo-second-letter">K</span>
          </h2>
        </div>
      </AnchorLink>
      <img
        src={menu_open}
        alt=""
        className="nav-menu-open"
        onClick={openMenu}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menu_close}
          alt=""
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home-section">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="" /> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about-section">
            <p onClick={() => setMenu("about")}>About Me</p>
            {menu === "about" ? <img src={underline} alt="" /> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services-section"
          >
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? <img src={underline} alt="" /> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#projects-section"
          >
            <p onClick={() => setMenu("projects")}>Projects</p>
            {menu === "projects" ? <img src={underline} alt="" /> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact-section"
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} alt="" /> : ""}
          </AnchorLink>
        </li>
      </ul>

      <AnchorLink className="anchor-link" offset={50} href="#contact-section">
        <div className="nav-connect">Let’s Talk</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
