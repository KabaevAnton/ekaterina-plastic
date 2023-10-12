import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <Link to='/pricesFace' className="info__link" onClick={() => window.scrollTo(0,0)}>
        <div className="info__box">
          <div className="info__iamge info__iamge_1" />
          <h3 className="info__subtitle">Пластика лица</h3>
          <p className="info__text">Контурная пластика – это безоперационный способ коррекции, позволяющий избавиться от признаков старения и изменить контуры лица</p>
        </div>
        </Link>
        <Link to='/pricesBust' className="info__link" onClick={() => window.scrollTo(0,0)}>
        <div className="info__box">
          <div className="info__iamge info__iamge_2" />
          <h3 className="info__subtitle">Пластика груди</h3>
          <p className="info__text">Пластика груди – это моделирование формы груди, которая позволяет увеличить, уменьшить, приподнять грудь или изменить ее форму</p>
        </div>
        </Link>
        <Link to='/pricesBody' className="info__link" onClick={() => window.scrollTo(0,0)}>
        <div className="info__box">
          <div className="info__iamge info__iamge_3" />
          <h3 className="info__subtitle">Пластика тела</h3>
          <p className="info__text">Пластика тела – процедуры, позволяющие изменить силуэт фигуры, при помощи воздействия на участки с избытком или недостатком подкожного жира или кожи</p>
        </div>
        </Link>
      </div>
    </section>
  )
}

export default Info;
