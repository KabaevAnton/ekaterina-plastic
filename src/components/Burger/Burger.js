import { Link } from "react-router-dom"; 
import './Burger.css'

function Burger(props) {
  return (
    <section className={`${props.isOpen ? 'burger burger_opened' : 'burger'}`} onClick={props.onClose} >
        <div className="burger__container" onClick={e => e.stopPropagation()}>
          <div className="burger__box">
            <h3 className="burger__menu-subtitle">Навигация</h3>
          </div>
          <ul className="burger__list">
          <li className="burger__links">
              <Link to="/" className="burger__link" onClick={props.onClose}>Главная</Link>
            </li>
            <li className="burger__links">
              <Link to="/about" className="burger__link" onClick={props.onClose}>О хирурге</Link>
            </li>
            <li className="burger__links">
              <Link to="/services" className="burger__link" onClick={props.onClose}>Услуги</Link>
            </li>
            <li className="burger__links">
              <Link to="/beforeAfter" className="burger__link" onClick={props.onClose}>До/После</Link>
            </li>
            <li className="burger__links">
              <Link to="/pricesFace" className="burger__link" onClick={props.onClose}>Цены</Link>
            </li>
          </ul>
          <div className="burger__box">
            <h3 className="burger__menu-subtitle">Контактная информация</h3>
          </div>
          <ul className="burger__list">
            <li className="burger__links">
              <p className="burger__number">
                <a href='tel:+7910-838-55-66' className='burger__link-tel'>+7910-838-55-66</a>
              </p>   
            </li>
            <li className="burger__links">
              <a className="burger__contacts" href="https://wa.me/+79108385566" target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
            <li className="burger__links">
              <a className="burger__contacts" href="https://t.me/+79108385566" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li className="burger__links">
              <a className="burger__contacts" href="https://instagram.com/ekaterina_martikainen?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li className="burger__links">
              <a className="burger__contacts" href="https://vk.com/ekaterina_martikainen" target="_blank" rel="noreferrer">ВКонтакте</a>
            </li>
          </ul>
          <div className="burger__box">
            <h3 className="burger__menu-subtitle">Дополнительно</h3>
          </div>
          <div className="burger__info">
            <a className="burger__contacts" href="https://blagofondlegche.ru/" target="_blank" rel="noreferrer">Благотворительный фонд "Легче"</a>
            <p className="burger__contacts-info">Реконструктивно-пластическая помощь для взрослых и детей</p>
          </div>
        </div>
    </section>
  );
}

export default Burger;