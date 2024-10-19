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
              Having ability to acquire new skills and adopt the best practices
              to improve. Objective is to work with maximum potential in a
              challenging and dynamic environment, with an opportunity of
              working with diverse group of people and enhancing my professional
              skills.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <span>80%</span>
              <div className="skill-bar">
                <hr style={{ width: "80%" }} />
              </div>
            </div>

            <div className="about-skill">
              <p>Bootstrap</p>
              <span>75%</span>
              <div className="skill-bar">
                <hr style={{ width: "75%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <span>50%</span>
              <div className="skill-bar">
                <hr style={{ width: "50%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <span>70%</span>
              <div className="skill-bar">
                <hr style={{ width: "70%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <span>70%</span>
              <div className="skill-bar">
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Personal Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
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
