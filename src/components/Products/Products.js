import "./Products.css";
import Header from "../Header/Header";
import sleepMask from "../../images/Products/SleepingMask.JPG"


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const sleepMaskImages = importAll(require.context('../../images/Products/sleepingMask/', false,));
const sleepMaskVideos = importAll(require.context('../../video/Products/sleepingMask/', false,));




function Products(props) {
  console.log("sleepMaskImages", Object.values(sleepMaskImages));
  
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
            <h3 className="services__title">Средства для реабилитации после эстетических операций на лице</h3>
            <div className="servisec__wrapper">
              <img className="services__img" alt="" src={sleepMask}></img>
              <div className="sevices__pharagrph">
                <p className="services__description">
                  {
                    sleepMaskImages.map(element => {
                      <img className="services__img" alt="" src={element}></img>
                    })
                  }
                </p>
                
              </div>
              <div className="sevices__pharagrph">
                
                <p className="services__description">
                  {
                    sleepMaskVideos.map(element => {
                      <img className="services__img" alt="" src={element}></img>
                    })
                  }
                </p>
                
              </div>
              <div className="sevices__pharagrph">
                <p className="services__description">
                  Маска для сна цена 10000 руб.
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
