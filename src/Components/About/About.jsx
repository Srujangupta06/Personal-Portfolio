import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="about" id="about-section">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1690988608/1649920510658_eycxp0.jpg"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Full-stack developer skilled in building dynamic SPAs using React
              and robust backend systems with Node.js and Express. Experienced
              in creating reusable components, secure API integrations, and
              managing state with React Context and Redux. Passionate about
              user-centric design, responsive layouts, and delivering
              high-impact web applications. Actively seeking opportunities in
              top MNCs to apply and grow full-stack expertise.
            </p>
          </div>
          <div className="about-skills">
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1706190725/html_wkdwjl.png"
                alt="html"
                className="skill-icon"
              />
              <p className="skill-name">HTML</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1706190725/css_kyis0h.png"
                alt="css"
                className="skill-icon"
              />
              <p className="skill-name">CSS</p>
            </div>
            {/* <div>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/fluency/96/bootstrap.png"
                alt="bootstrap"
              />
              <p className="skill-name">Bootstrap</p>
            </div>
            <div>
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/fluency/96/tailwind_css.png"
                alt="tailwindcss"
              />
              <p className="skill-name">Tailwind CSS</p>
            </div> */}
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1701266719/js_uxedmf.png"
                alt="javascript"
                className="skill-icon"
              />
              <p className="skill-name">JavaScript</p>
            </div>
            
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1746548022/react_fuiudk.png"
                alt="reactjs"
                className="skill-icon"
              />
              <p className="skill-name">React</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1706190725/python_img_srndal.png"
                alt="python"
                className="skill-icon"
              />
              <p className="skill-name">Python</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1746547722/sqlite-logo-png_x3uhnt.png"
                alt="sqlite"
                className="skill-icon"
              />
              <p className="skill-name">SQLite</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1746548020/mongodb_qoceyq.png"
                alt="mongodb"
                className="skill-icon"
              />
              <p className="skill-name">MongoDB</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1746548021/nodejs_krsost.png"
                alt="nodejs"
                className="skill-icon"
              />
              <p className="skill-name">Nodejs</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1746555356/express_qiife5.png"
                alt="express"
                className="skill-icon"
              />
              <p className="skill-name">Express</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Personal Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>200+</h1>
          <p>Hours of Coding</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>Git Commits</p>
        </div>
      </div>
    </div>
  );
};

export default About;
