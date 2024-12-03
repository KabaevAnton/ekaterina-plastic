import "./Products.css";
import Header from "../Header/Header";
import sleepMask from "../../images/Products/SleepingMask.JPG"
import sleepMaskVideo from "../../video/Products/SleepingMask.MOV"


function Products(props) {
  return (
    <section className="services">
      <Header isOpen={props.isOpen} onBurger={props.onBurger} />
      <div className="services__container">
        <div className="services__section">
          <div className="services__image"></div>
          <div className="services__qb">
            <p className="services__quote services__quote-name">
              В этом разделе я предлагаю различные товары полезные в до/после операционный период
            </p>            
          </div>
        </div>
        <ul className="services__list">
          <li className="services__box">
            <h3 className="services__title">Маска для сна</h3>
            <div className="servisec__wrapper">
              <img className="services__img" alt="" src={sleepMask}></img>
              <div className="sevices__pharagrph">
                <p className="services__description">
                  Маска для сна цена 10000 руб.
                </p>
                <p className="services__description">
                  <video className="video__mainVideo" src={sleepMaskVideo} controls />
                </p>
                
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
}

export default Products;
