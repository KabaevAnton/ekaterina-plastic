import "./Technical.css";
import Section from "../Section/Section";
import { Link } from "react-router-dom";

function Technical(props) {
  return (
    <section className="technical">
      <div className="technical__header">
        <div className="technical__links">
          <Link to="/" className="technical__link">
            Главная
          </Link>
          <Link to="/beforeAfter" className="technical__link" target="_blanc">
            До/После
          </Link>
        </div>
        <button className="technical__exit" onClick={props.onExit}>
          Выйти
        </button>
      </div>
      <div className="technical__add">
        <button type="submit" className="technical__btn" onClick={props.onAddTitle}>
          Добавить раздел
        </button>
      </div>
      <ul className="technical__list">
        {props.sections.map((section, key) => {
          return (
            <Section
              section={section}
              key={key}
              onImage={props.onImage}
              onImageClick={props.onImageClick}
              onSend={props.onSend}
              img={props.img}
              setImg={props.setImg}
              onDeleteImg={props.onDeleteImg}
              onConfirm={props.onConfirmSection}
              onConfirmImg={props.onConfirmImg}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Technical;
