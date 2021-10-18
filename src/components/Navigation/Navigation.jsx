import useWindowWidth from "../../hooks/useWindowWidth";
import sprite from "../../images/sprite.svg"

const Navigation = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="menu">
      {windowWidth < 1024 ? 
        <a href="#" className="menu__link">
          <svg className="menu__image" width="24" hanging="24">
            <use href={ sprite + "#menu" }></use>
          </svg>
        </a>
        :
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Company
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Blog
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Career
            </a>
          </li>
        </ul>
      }
    </div>
  );
}

export default Navigation;
