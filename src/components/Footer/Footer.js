import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <Link to="/">
          <div className="footer__logo"></div>
        </Link>
        <div className="footer__box">
          <div className="footer__items">
            <h3 className="footer__subtitle">Навигация</h3>
            <ul className="footer__list">
              <li className="footer__links">
                <Link to="/" className="footer__link">
                  Главная
                </Link>
              </li>
              <li className="footer__links">
                <Link to="/about" className="footer__link">
                  О хирурге
                </Link>
              </li>
              <li className="footer__links">
                <Link to="/services" className="footer__link">
                  Услуги
                </Link>
              </li>
              <li className="footer__links">
                <Link to="/beforeAfter" className="footer__link">
                  До/После
                </Link>
              </li>
              <li className="footer__links">
                <Link to="/pricesFace" className="footer__link">
                  Цены
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__items">
            <h3 className="footer__subtitle">Контактная информация</h3>
            <ul className="footer__list">
              <li className="footer__links">
                <p className="footer__number">
                  <a href='tel:+7910-838-55-66' className='footer__link-tel'>+7910-838-55-66</a>
                </p>
              </li>
              <li className="footer__links">
                <a
                  className="footer__contacts"
                  href="https://wa.me/+79108385566"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li className="footer__links">
                <a
                  className="footer__contacts"
                  href="https://t.me/+79108385566"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="footer__links">
                <a
                  className="footer__contacts"
                  href="https://vk.com/ekaterina_martikainen"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="footer__links">
                <a
                  className="footer__contacts"
                  href="https://instagram.com/ekaterina_martikainen?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__items footer__element">
            <h3 className="footer__subtitle">Дополнительно</h3>
            <div className="footer__info">
              <a
                className="footer__contacts"
                href="https://blagofondlegche.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Благотворительный фонд "Легче"
              </a>
              <p className="footer__contacts-info">
                Реконструктивно-пластическая помощь<br></br> для взрослых и детей
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="footer__copyright">Copyright © 2023 «Екатерина Мартикайен» </p>
    </footer>
  );
}

export default Footer;
