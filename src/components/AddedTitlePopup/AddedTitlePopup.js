import "./AddedTitlePopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";

function AddedTitlePopup(props) {
  const [formValid, setFormValid] = useState(false);
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault(); 

    props.onAddSection({
      title: title
    })

    setTitle('')
  }

  function handleChange (e) {
    setTitle(e.target.value)

    if(e.target.value.length > 0) {
        setFormValid(true)
    }
  } 

  return (
    <PopupWithForm
      title="Добавить раздел"
      text="Добавить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      disabled={!formValid}
    >
      <input
        type="text"
        name="title"
        placeholder="Название раздела"
        id="name-input"
        className="popup__input"
        value={title}
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}

export default AddedTitlePopup;
