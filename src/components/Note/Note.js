import "./Note.css";
import { Link } from "react-router-dom";

function Note() {
  return (
    <section className="note">
      <div className="note__container">
        <div className="note__info">
          <div className="note__box">
            <h2 className="note__title">Мартикайнен Екатерина Александровна</h2>
            <p className="note__text">
              Врач челюстно-лицевой и пластической хирургии
            </p>
            <div className="note__qb">
              <p className="note__quote">
                «Областью моих интересов являются операции на голове и шеи, а
                так же, на молочной железе и животе. С более подробным списком
                услуг вы можете ознакомится в разделе{" "}
                <Link to="/servises" className="note__link">
                  Услуги»
                </Link>
              </p>
            </div>
          </div>
          <Link to="/about" className="note__link"><button type="button" className="note__btn">Подробнее о хирурге</button></Link>
        </div>
        <div className="note__photo" />
      </div>
    </section>
  );
}

export default Note;
