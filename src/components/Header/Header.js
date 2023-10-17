import "./Header.css";
import whatsapp from "../../images/whatsapp.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const path = useLocation().pathname;

  function handleClick() {
    props.onBurger();
  }

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__elements">
        {path === "/" ? (
          <ul className="header__links">
            <li className="header__link">
              <Link to="/about" className="header__link-to" onClick={() => window.scrollTo(0,0)}>
                О хирурге
              </Link>
            </li>
            <li className="header__link">
              <Link to="/services" className="header__link-to" onClick={() => window.scrollTo(0,0)}>
                Услуги
              </Link>
            </li>
            <li className="header__link">
              <Link to="/beforeAfter" className="header__link-to" onClick={() => window.scrollTo(0,0)}>
                До/После
              </Link>
            </li>
            <li className="header__link">
              <Link to="/pricesFace" className="header__link-to" onClick={() => window.scrollTo(0,0)}>
                Цены
              </Link>
            </li>
            <li className="header__link">
              <Link to="/contacts" className="header__link-to" onClick={() => window.scrollTo(0,0)}>
                Контакты
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="header__links">
            <li className="header__link">
              <Link to="/" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                Главная
              </Link>
            </li>
            <li className="header__link">
              <Link to="/about" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                О хирурге
              </Link>
            </li>
            <li className="header__link">
              <Link to="/services" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                Услуги
              </Link>
            </li>
            <li className="header__link">
              <Link to="/beforeAfter" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                До/После
              </Link>
            </li>
            <li className="header__link">
              <Link to="/pricesFace" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                Цены
              </Link>
            </li>
            <li className="header__link">
              <Link to="/contacts" className="header__link-to header__link-to_gray" onClick={() => window.scrollTo(0,0)}>
                Контакты
              </Link>
            </li>
          </ul>
        )}
        <div className="header__contact">
          <img
            className="header__icon"
            src={whatsapp}
            alt="icon-WhatsApp"
          ></img>
          <a
            className="header__number"
            href="https://wa.me/+79108385566"
            target="_blank"
            rel="noreferrer"
          >
            +79108385566
          </a>
        </div>
        {props.isOpen ? (
          <div className="header__burger-btn" onClick={handleClick}>
            <div className="header__bar header__bar1 header__bar_close"></div>
            <div className="header__bar header__bar2 header__bar_close"></div>
            <div className="header__bar header__bar3 header__bar_close"></div>
          </div>
        ) : (
          <div className="header__burger-btn" onClick={handleClick}>
            <div className="header__bar header__bar1"></div>
            <div className="header__bar header__bar2"></div>
            <div className="header__bar header__bar3"></div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
