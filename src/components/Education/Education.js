import "./Education.css";
import { diploms } from "../../constanst/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Education(props) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1393,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function handleClick(array, image) {
    props.onImage(array)
    props.onImageClick(array, image)
  }

  return (
    <section className="education">
      <h2 className="education__title">Дипломы и Сертификаты</h2>
      <Slider {...settings}>
       {diploms.map((image, key) => {
        return(
          <div key={key} className="education__block">
            <img className="education__diploma" src={image} alt="фото диплома" onClick={() => handleClick(diploms, image)}/>
          </div>
        )
       })}
      </Slider>
    </section>
  );
}

export default Education;
