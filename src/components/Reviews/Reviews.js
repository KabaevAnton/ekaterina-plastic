import "./Reviews.css";
import review from "../../images/reviews.png";
import review2 from "../../images/reviews2.png";
import reviews3 from "../../images/reviews3.png";
import review4 from "../../images/reviws4.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Reviews(props) {
  const reviews = [review, review2, reviews3, review4];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1133,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__info">
        <p className="reviews__text">
          Больше отзывов на сайте
          <a
            href="https://prodoctorov.ru/moskva/vrach/827218-martikaynen/#courses"
            className="reviews__link"
            target="_blank"
            rel="noreferrer"
          >
            prodoctorov.ru
          </a>
        </p>
      </div>
      <div className="reviews__container">
        <Slider {...settings}>
          {reviews.map((rev, key) => {
            return (
              <div className="reviews__block" key={key}>
                <img src={rev} alt="скрин отзыва" className="reviews__img" onClick={() => handleClick(reviews ,rev)} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
