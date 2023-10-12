import "./Section.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constanst/constants";
import { forwardRef } from "react";

const Section = forwardRef ((props, ref) => {
  const [imageQuantity, setImageQuantity] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const path = useLocation().pathname;

  useEffect(() => {
    const resize = () => {
      setTimeout(() => setWidth(window.innerWidth), 200);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (width > 1590) {
      setImageQuantity(5);
    } else if (width > 1299) {
      setImageQuantity(4);
    } else if (width > 1009) {
      setImageQuantity(3);
    } else if (width > 659) {
      setImageQuantity(2);
    } else if (width <= 659) {
      setImageQuantity(1);
    }
  }, [width]);

  function adedMore() {
    let addedImage;
    if (width > 1299) {
      addedImage = 4;
    } else if (width > 1009) {
      addedImage = 3;
    } else if (width > 659) {
      addedImage = 2;
    } else if (width <= 659) {
      addedImage = 2;
    }

    setImageQuantity(imageQuantity + addedImage);
  }

  function handleClick(array, image) {
    props.onImage(array)
    props.onImageClick(array, image)
  }

  return (
    <li className="section__item">
      <section className="section__container">
        <div className="section__box">
          <h2 className="section__title" ref={ref}>{props.section.title}</h2>
          {path === "/technical" ? (
            <button
              type="button"
              className="section__btn-delete"
              title="Удалить раздел"
              onClick={() => props.onConfirm(props.section)}
            ></button>
          ) : null}
        </div>
        <ul className="section__list">
          {props.section.file.slice(0, imageQuantity).map((image, key) => {
            return (
              <li className="section__block" key={key}>
                <img
                  className="section__img"
                  src={`${BASE_URL}${image.src}`}
                  alt="фото"
                  onClick={() => handleClick(props.section.file, image)}
                />
                {path === "/technical" ? (
                  <button
                    className="section__btnDelImg"
                    type="delete"
                    title="удалить фото"
                    onClick={() => props.onConfirmImg(props.section, image)}
                  ></button>
                ) : null}
              </li>
            );
          })}
        </ul>
        {props.section.file.length > imageQuantity && (
          <div className="section__btn">
            <button
              type="button"
              className="section__btn-else"
              onClick={adedMore}
            >
              Показать еще
            </button>
          </div>
        )}
        {path === "/technical" ? (
          <div className="section__addImage">
            <div className="section__add">
              <input
                type="file"
                name="image"
                placeholder="Добавить изображение"
                className="section__inputfile"
                accept="image/*, .png, .jpeg, .jpg"
                multiple="multiple"
                onChange={(e) => props.setImg(e.target.files[0])}
              />
              <button
                type="submit"
                className="section__download"
                onClick={() => props.onSend(props.img, props.section)}
              >
                Загрузить
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </li>
  );
})

export default Section;
