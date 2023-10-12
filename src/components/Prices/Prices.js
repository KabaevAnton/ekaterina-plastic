import './Prices.css'
import Header from '../Header/Header';
import { useLocation, Link } from 'react-router-dom';


function Prices (props) {
  const path = useLocation().pathname

    return (
        <section className='prices'>
        <Header isOpen={props.isOpen} onBurger={props.onBurger}/>
        <div className='prices__container'>
          <div className='prices__links'>
            <Link to='/pricesFace' className={path === '/pricesFace' ? 'prices__subtitle prices__subtitle_active' : 'prices__subtitle'}>Пластика лица</Link>
            <Link to='/pricesBust' className={path === '/pricesBust' ? 'prices__subtitle prices__subtitle_active' : 'prices__subtitle'}>Пластика груди</Link>
            <Link to='/pricesBody' className={path === '/pricesBody' ? 'prices__subtitle prices__subtitle_active' : 'prices__subtitle'}>Пластика тела</Link>
            <Link to='/pricesDopOptions' className={path === '/pricesDopOptions' ? 'prices__subtitle prices__subtitle_active' : 'prices__subtitle'}>Новообразования</Link>
          </div>
          {props.children}
        </div>
        </section>
    )
}

export default Prices;