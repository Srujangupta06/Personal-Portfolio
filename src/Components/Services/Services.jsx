import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Servies_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Services = () => {
  return (
    <div className="services" id="services-section">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Servies_data.map((eachService, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{eachService.s_no}</h3>
              <h2>{eachService.s_name}</h2>
              <p>{eachService.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
