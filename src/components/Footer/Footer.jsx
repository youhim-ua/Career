import sprite from "../../images/sprite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2018-2021 FREYSOFT. All rights reserved</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a href="#" className="footer__link">Terms of Use</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">Privacy policy</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">Site Map</a>
        </li>
      </ul>
      <ul className="footer__list footer__list--social">
        <li className="footer__item footer__item--social">
          <a
            href="https://www.facebook.com/freysoft/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__link"
          >
            <svg className="social-icons" width="16" height="16">
              <use href={ sprite + "#facebook_ic" }></use>
            </svg>
          </a>
        </li>
        <li className="footer__item footer__item--social">
          <a
            href="https://www.linkedin.com/company/frey-soft/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__link"
          >
            <svg className="social-icons" width="16" height="16">
              <use href={ sprite + "#linkedin_ic" }></use>
            </svg>
          </a>
        </li>
        <li className="footer__item footer__item--social">
          <a
            href="https://twitter.com/?lang=uk"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__link"
          >
            <svg className="social-icons" width="16" height="16">
              <use href={ sprite + "#twitter_ic" }></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
