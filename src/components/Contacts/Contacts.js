import './Contacts.css';
import Header from '../Header/Header';
import whatsapp from '../../images/whatsapp.svg';
import telegram from '../../images/telegram.svg';
import instagram from '../../images/instagram.svg';
import vk from '../../images/vk.svg'


function Contacts (props) {
    return(
        <section className='contacts'>
          <Header isOpen={props.isOpen} onBurger={props.onBurger} />
          <div className='contacts__container'>
            <h2 className='contacts__title'>Контакты</h2>
            <p className='contacts__subtitle'>Запись на прием:</p>
            <p className='contacts__number'>
              <a href='tel:+7910-838-55-66' className='contacts__link-tel'>+7910-838-55-66</a>
            </p>
            <p className='contacts__social-title'>Социальные сети:</p>
            <ul className='contacts__social-list'>
              <li className='contacts__social-links'>
                <a className="contacts__social-number" href="https://wa.me/+79108385566" target="_blank"rel="noreferrer">
                  <img className="contacts__social-icon" src={whatsapp} alt="icon-WhatsApp"></img>
                </a>
              </li>
              <li className='contacts__social-links'>
                <a className="contacts__social-number" href="https://t.me/+79108385566" target="_blank"rel="noreferrer">
                  <img className="contacts__social-icon" src={telegram} alt="icon-telegram"></img>
                </a>
              </li>
              <li className='contacts__social-links'>
                <a className="contacts__social-number" href="https://instagram.com/ekaterina_martikainen?igshid=MzRlODBiNWFlZA==" target="_blank"rel="noreferrer">
                  <img className="contacts__social-icon" src={instagram} alt="icon-instagram"></img>
                </a>
              </li>
              <li className='contacts__social-links'>
                <a className="contacts__social-number" href="https://vk.com/ekaterina_martikainen" target="_blank"rel="noreferrer">
                  <img className="contacts__social-icon" src={vk} alt="icon-vk"></img>
                </a>
              </li>
            </ul>
          </div>
        </section>
    )
}

export default Contacts;