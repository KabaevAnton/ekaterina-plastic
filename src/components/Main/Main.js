import Root from "../Root/Root";
import Note from "../Note/Note";
import Reviews from "../Reviews/Reviews";
import Info from "../Info/Info";

function Main (props) {
    return (
        <main>
            <Root isOpen={props.isOpen} onBurger={props.onBurger} />
            <Note />
            <Info />
            <Reviews onImageClick={props.onImageClick} onImage={props.onImage}/>
        </main>
    )
}

export default Main;