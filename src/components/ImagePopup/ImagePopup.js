import "./ImagePopup.css";
import { BASE_URL } from "../../constanst/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ImagePopup(props) {
  const [swiper, setSwiper] = useState(null);
  const path = useLocation().pathname;

  useEffect(() => {
    const num = props.index;
    if (swiper) {
      swiper.slideTo(num, 10);
    }
  }, [props.index, swiper]);

  return (
    <section
      className={props.isOpen ? "imagePopup imagePopup_opened" : "imagePopup"}
      onClick={props.onClose}
    >
      <div className="imagePopup__wrapper">
        <button
          onClick={props.onClose}
          className="imagePopup__close"
          type="button"
          aria-label="Close"
        ></button>
        <div
          className="imagePopup__container"
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            onSwiper={(s) => {
              setSwiper(s);
            }}
            slideToClickedSlide={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {props.array.map((image, key) => {
              return (
                <SwiperSlide key={key}>
                  <div className="imagePopup__box">
                    {path === "/technical" || path === "/beforeAfter" ? (
                      <img
                        className="imagePopup__image"
                        src={`${BASE_URL}${image.src}`}
                        alt=""
                      ></img>
                    ) : (
                      <img
                        className="imagePopup__image"
                        src={image}
                        alt=""
                      ></img>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
