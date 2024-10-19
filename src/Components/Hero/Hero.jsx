import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import resume from "../../assets/SrujanKandakurthiResume.pdf";
const Hero = () => {
  return (
    <div className="hero" id="home-section">
      <img
        src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1667743305/WhatsApp_Image_2022-11-06_at_19.30.15_xwa3eq.jpg"
        alt="profile img"
        className="hero-profile-img"
      />
      <h1>
        <span className="hero-name">I’m Srujan Kandakurthi</span> <br />
        <span className="hero-role">Frontened Developer</span>
      </h1>
      <p>
        Fellow Knows Python, JavaScript, Front End Development, Backend
        Development,Web Design using Figma along with Version Control System who
        <span className="oppurtunity-heading"> Looking for Opportunities </span>
      </p>

      <div className="hero-action">
        <a
          href="https://github.com/Srujangupta06?tab=repositories"
          target="_blank"
        >
          <div className="hero-connect">Explore 🌐</div>
        </a>
        <a href={resume} download="SrujanKandakurthiResume.pdf">
          <div className="hero-download-resume">My Resume 📝</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
