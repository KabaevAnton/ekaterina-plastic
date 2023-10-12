import "./Root.css";
import Header from "../Header/Header";

function Root(props) {
  return (
    <section className="root">
      <Header isOpen={props.isOpen} onBurger={props.onBurger}/>
      <div className="root__container">
        <h1 className="root__title">Ekaterina<br></br>Martikainen</h1>
      </div>
    </section>
  );
}

export default Root;
