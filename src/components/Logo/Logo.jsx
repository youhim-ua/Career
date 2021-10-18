import sprite from "../../images/sprite.svg"

const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo__link">
        <svg className="logo__image" width="137" height="38">
          <use href={ sprite + "#freysoft" }></use>
        </svg>
      </a>
    </div>
  );
}

export default Logo;
