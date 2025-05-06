import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2 className="logo">
            S<span className="logo-second-letter">K</span>
          </h2>

          <p>Iam a Frontened Developer</p>
        </div>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
        <div className="social-media-links-container">
          <div>
            <a
              href="https://www.linkedin.com/in/srujan-kandakurthi"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1729249685/LinkedIn_uquqf0.png"
                className="social-media-img"
                alt="linkedin"
              />
            </a>
          </div>
          <div>
            <a href="https://x.com/srujangupta06" target="_blank">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1729249685/Twitter_X_onxtkv.png"
                className="social-media-img"
                alt="twitter-x"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/mr_kandakurthi/" target="_blank">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1729249684/Insta_jmavtp.png"
                className="social-media-img"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2024 Srujan Kandakurthi. All rights reserved
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
