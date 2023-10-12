import PopupWithForm from "../PopupWithForm/PopupWithForm";

function ConfirmationPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
    
        props.onDelete()
      }

  return (
    <PopupWithForm
    name="confirm"
    title="Удалить?"
    text="Да"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
  </PopupWithForm>
  );
}

export default ConfirmationPopup;
