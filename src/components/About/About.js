import "./About.css";
import Header from "../Header/Header";
import Education from "../Education/Education";
import Video from "../Video/Video";
import img from "../../images/about.jpg";

function About(props) {
  return (
    <section className="about">
      <Header isOpen={props.isOpen} onBurger={props.onBurger} />
      <div className="about__about">
        <h2 className="about__title">Екатерина Мартикайнен</h2>
        <div className="about__container">
          <div className="about__box">
            <div className="about__info">
              <p className="about__text">
                Помощь людям - моя мечта, цель, миссия, профессия, а теперь ещё
                и благотворительный фонд Легче.
              </p>
              <p className="about__text">
                Легче - мой социальный проект, созданный в команде
                единомышленников. Он создан для того, чтобы реконструктивная
                хирургия облегчала и налаживала жизнь после онкологий, аварий,
                травм и болезней.
              </p>
              <p className="about__text">
                Реконструктивная пластика - одно из самых сложных, но интересных
                и многопрофильных направлений хирургии. Фонд призван с ее
                помощью восстановить не только физиологические функции, но и
                эстетические. БФ Легче - это социальный проект, а значит - даёт
                социальный результат. Мы помогаем пациентам на всех этапах: от
                поиска врача и установления диагноза до операции, реабилитации и
                социализации. Так же фонд занимается обучением и подготовкой
                реконструктивных хирургов и специалистов.
              </p>
            </div>
            <a
              className="about__link"
              href="https://legchefond.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Благотворительный фонд "Легче"
            </a>
          </div>
          <img className="about__img" src={img} alt="фотография хирурга" />
        </div>
        <div className="about__education">
          <h2 className="about__education-subtitle">Образование</h2>
          <div className="about__education-box">
            <p className="about__education-text">
              - В 2011г. получен Диплом с отличием ОК № 03817, присуждена
              квалификация "врач" по специальности "Лечебное дело", г. Тверь,
              ГОУ ВПО "Тверская Государственная Медицинская Академия" (2005-2011
              гг.) очная форма обучения
            </p>
            <p className="about__education-text">
              - В 2020г. получен Диплом об окончании ординатуры, рег. № 170 по
              специальности "Врач-пластический хирург", Тверская Государственная
              Медицинская Академия - ординатура по дерматовенерологии (2011-2013
              гг.)
            </p>
            <p className="about__education-text">
              - Тверской Государственный Медицинский Университет-ординатура по
              челюстно-лицевой хирургии (2015-2017 гг.)
            </p>
            <p className="about__education-text">
              - Российская Медицинская Академия Непрерывного Профессионального
              образования (РМАНПО г. Москва)- ординатура по пластической
              хирургии (2018-2020 гг.)
            </p>
          </div>
        </div>
        <Education onImage={props.onImage} onImageClick={props.onImageClick} />
        <Video />

      </div>
    </section>
  );
}

export default About;
