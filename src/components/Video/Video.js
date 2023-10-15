import "./Video.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoMain from "../../video/video.mp4";
import video1 from "../../video/blefaro.mp4"
import video2 from "../../video/grud.mp4";
import video3 from "../../video/how.mp4";
import inst from "../../images/inst.svg";

function Video() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="video">
      <div className="video__container">
        <h2 className="video__title">Видео-визитка</h2>
        <video className="video__mainVideo" src={videoMain} controls />
        <div className="video__boxes">
          <Slider {...settings}>
            <div className="video__box">
              <video className="video__video" src={video1} controls />
              <p className="video__text">Блефаропластика</p>
            </div>
            <div className="video__box">
              <video className="video__video" src={video2} controls />
              <p className="video__text">Как отличить грудь?</p>
            </div>
            <div className="video__box">
              <video className="video__video" src={video3} controls />
              <p className="video__text">Как в 38 выглядеть на 25?</p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="video__link">
        <a
          className="video__link-element"
          href="https://instagram.com/ekaterina_martikainen?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noreferrer"
        >
          Больше видео в Instagram
        </a>
        <img src={inst} className="video__link-icon" alt="" />
      </div>
    </section>
  );
}

export default Video;
