import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "479f5f6e-c661-4c5f-9502-56869c4a3c8e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert('Form Submitted Successfully')
    }
  };
  return (
    <div className="contact" id="contact-section">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let’s Talk</h1>
          <p>
            I’m currently available to take Projects, so feel free to message me
            about anything that you want me to work on. You can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>srujankandakurthi06@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9381138831</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nizamabad, Telanagana - India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="message">Write your Message here</label>
          <textarea
            rows="3"
            name="message"
            placeholder="Enter your Message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
