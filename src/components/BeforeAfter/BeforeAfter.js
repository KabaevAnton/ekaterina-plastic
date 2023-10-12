import "./BeforeAfter.css";
import Header from "../Header/Header";
import Section from "../Section/Section";
import { useRef } from "react";

function BeforeAfter(props) {
  const refs = useRef([])

  function handleClick (el) {
    refs.current[el].scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section className="beforeAfter">
      <Header onBurger={props.onBurger} />
      <h2 className="beforeAfter__title">Портфолио</h2>
      <ul className="beforeAfter__list">
        <ul className="beforeAfter__menu">
          {
            props.sections.map((section, i) => {
               return (
                <li className="beforeAfter__menu-links" key={i}>
                  <button className="beforeAfter__menu-btn" onClick={()=> handleClick(i)}>{section.title}</button>
                </li>
               )
            })
          }
        </ul>
        {props.sections.map((section, i) => {
          return (
            <Section
              ref={(element) => refs.current[i] = element}
              section={section}
              key={i}
              isOpen={props.isOpen}
              onImage={props.onImage}
              onImageClick={props.onImageClick}
            />
          );
        })}
      </ul>
    </section>

  );
}

export default BeforeAfter;
