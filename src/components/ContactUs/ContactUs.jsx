import useWindowWidth from "../../hooks/useWindowWidth";
import sprite from "../../images/sprite.svg"

const ContactUs = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="contact-us">
      {windowWidth < 1024 ?
        <a href="#contact-us" className="contact-us__link">
          <svg className="contact-us__image" width="24" height="24">
            <use href={ sprite + "#Contact" }></use>
          </svg>
        </a>
        :
        <a href="#contact-us" className="contact-us__link">Contact Us</a>
      } 
    </div>
  );
}

export default ContactUs;
