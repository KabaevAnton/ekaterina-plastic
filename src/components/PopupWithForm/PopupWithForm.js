import './PopupWithForm.css'

function PopupWithForm (props) {

  return (
    <div>
      <section className={`${props.isOpen ? `popup popup_opened` : `popup`}`} onClick={props.onClose}>
        <div className="popup__container" onClick={e => e.stopPropagation()}>
          <h2 className="popup__title">{props.title}</h2>
          <form  onSubmit={props.onSubmit} className="popup__form" noValidate>
            <fieldset className="popup__formSet">
              {props.children}
            </fieldset>
            <button disabled={props.disabled} type="submit" className="popup__btn-submit">{props.text}</button>
          </form>

          <button onClick={props.onClose} className="popup__btn-close" type="button" aria-label="Close"></button>
        </div>
      </section>
    </div>
  );
}

export default PopupWithForm;
