import PopupWithForm from "../PopupWithForm/PopupWithForm";
import './ConfirmationImgPopup.css'

function ConfirmationImgPopup (props) {

    function handleSubmit(e) {
        e.preventDefault();
    
        props.onDelete({
          _id: props.delImage
        })
      }

  return(
    <PopupWithForm
    name="confirm"
    title="Удалить?"
    text="Да"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <input 
        type="text"
        name="title"
        placeholder="Название раздела"
        id="name-input"
        className="popup__input popup__input_confirm"
        value={props.delImage}
        readOnly
      />
  </PopupWithForm>
  )
}

export default ConfirmationImgPopup