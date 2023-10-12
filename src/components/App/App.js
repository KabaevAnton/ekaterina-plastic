import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Burger from "../Burger/Burger";
import Main from "../Main/Main";
import About from "../About/About";
import Login from "../Login/Login";
import Technical from "../Technical/Technical";
import BeforeAfter from "../BeforeAfter/BeforeAfter";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ImagePopup from "../ImagePopup/ImagePopup";
import AddedTitlePopup from "../AddedTitlePopup/AddedTitlePopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import ConfirmationImgPopup from "../ConfirmationPopup/ConfirmationImgPopup";
import PricesFace from "../Prices/PricesFace";
import PricesBust from "../Prices/PricesBust";
import PricesBody from "../Prices/PricesBody";
import PricesDopOptions from "../Prices/PricesDopOptions";
import Services from "../Services/Services";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import * as Api from "../../utils/Api";

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupConfirmOpen, setIsPopupConfirmOpen] = useState(false);
  const [isImgPopupConfirmOpen, setIsImgPopupConfirmOpen] =useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [array, setArray] = useState([])
  const [index, setIndex] =useState(null)
  const [delImage, setDelImage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);
  const [sections, setSections] = useState([]);
  const [confirmDelSection, setConfirmDelSection] = useState({})
  const [confirmDelImage, setConfirmDelImage] = useState({})
  const [img, setImg] = useState(null);

  const path = useLocation().pathname;

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setLoggedIn(true);

      if (path === "/admin") {
        navigate("/technical");
      }
    }
  }, [navigate, path]);

  useEffect(() => {
    Promise.all([Api.getSections()])
      .then(([sectionData]) => {
        setSections(sectionData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const closePopupWithEsc = (e) => {
      if (e.key === "Escape") {
        closeBurgerMenu();
        closePopups();
      }
    };
    window.addEventListener("keydown", closePopupWithEsc);
    return () => window.removeEventListener("keydown", closePopupWithEsc);
  });

  function handleBurgerOpen() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  function closeBurgerMenu() {
    setIsBurgerOpen(false);
  }

  function handlePopupOpen() {
    setIsPopupOpen(!isPopupOpen);
  }

  function handleImageOpen (array) {
    setArray(array)
    setIsImagePopupOpen(!isImagePopupOpen)
  }

  function handleImageClick(array, image) {
    const num = array.indexOf(image)
    setIndex(num)
  }

  function closePopups() {
    setIsPopupOpen(false);
    setIsPopupConfirmOpen(false)
    setIsImgPopupConfirmOpen(false)
    setIsImagePopupOpen(false)
    setDelImage('')
  }

  function handleLogin({ username, password }) {
    return Api.authorize(username, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/technical");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  function handleAddSection(title) {
    Api.addNewSection(title)
      .then((newSection) => {
        setSections([newSection, ...sections]);
        closePopups();
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteSection(section) {
    Api.deleteSection(section._id)
      .then(() => {
        setSections((allSections) =>
          allSections.filter((i) => i._id !== section._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCnfirmSection(section) {
    setConfirmDelSection(section)
    setIsPopupConfirmOpen(!isPopupConfirmOpen)
  }

  function handleConfirmDelSection() {
    handleDeleteSection(confirmDelSection)
    closePopups()
  }

  // const handleSendImage = useCallback(async () => {
  //   try {
  //     const data = new FormData();
  //     data.append("image", img);

  //     await axios
  //       .post("http://localhost:3001/upload", data, {
  //         headers: {
  //           "content-type": "mulpipart/form-data",
  //         },
  //       })
  //       .then((res) => setImages([res.data, ...images]));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [img]);

  // const handleSendImage = async (id) => {
  //   const formData = new FormData()
  //   formData.append('image', img);

  //   const res = await fetch(`http://localhost:3001/technical/section/${id}`, {
  //     method: 'PATCH',
  //     body: formData,
  //   });
  //   const data = await res.json()

  //   setSections([data, ...sections])
  // }

  const handleSendImage = async (img, section) => {
    
    const res = await Api.createImage(img, section._id);

    const data = await res.json();

    const newSection = sections.filter((i) => i._id !== data._id)

    setSections([data, ...newSection])
  };
    
  const handleDeleteImg = async (state, image) => {
    Api.deleteImage(state._id, image)
      .then((data) => {
        const newSection = sections.filter((i) => i._id !== data._id)

        setSections([data, ...newSection])
    })
    .catch((err) => console.log(err))
  }

  function handleConfirmImage(section, image) {
    setConfirmDelImage(section)
    setDelImage(image._id)
    setIsImgPopupConfirmOpen(!isImgPopupConfirmOpen)
  }

  function handleConfirmDelImage(image) {
     handleDeleteImg(confirmDelImage, image)
     closePopups()
  }
  
  return (
    <div className="App">
      <Burger isOpen={isBurgerOpen} onClose={closeBurgerMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <Main isOpen={isBurgerOpen} onImage={handleImageOpen} onImageClick={handleImageClick} onBurger={handleBurgerOpen} />
          }
        />
        <Route path="/about" element={<About onImage={handleImageOpen} onImageClick={handleImageClick} isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route path="services" element={<Services isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route
          path="/beforeAfter"
          element={
            <BeforeAfter
              sections={sections}
              onImage={handleImageOpen} 
              onImageClick={handleImageClick}
              onBurger={handleBurgerOpen}
            />
          }
        />
        <Route path="/pricesFace" element={<PricesFace isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route path="/pricesBust" element={<PricesBust isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route path="/pricesBody" element={<PricesBody isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route path="/pricesDopOptions" element={<PricesDopOptions isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route path="/admin" element={<Login onLogin={handleLogin} />} />
        <Route path="/contacts" element={<Contacts isOpen={isBurgerOpen} onBurger={handleBurgerOpen} />} />
        <Route
          path="/technical"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Technical}
              sections={sections}
              onAddTitle={handlePopupOpen}
              onExit={handleLogout}
              onImage={handleImageOpen} 
              onImageClick={handleImageClick}
              onConfirmSection={handleCnfirmSection}
              onConfirmImg={handleConfirmImage}
              onDeleteImg={handleDeleteImg}
              onSend={handleSendImage}
              img={img}
              setImg={setImg}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ImagePopup array={array} isOpen={isImagePopupOpen} index={index} onClose={closePopups} />
      <AddedTitlePopup
        isOpen={isPopupOpen}
        onClose={closePopups}
        onAddSection={handleAddSection}
      />
      <ConfirmationPopup 
        isOpen={isPopupConfirmOpen}
        onClose={closePopups}
        onDelete={handleConfirmDelSection}
      />
      <ConfirmationImgPopup 
        isOpen={isImgPopupConfirmOpen}
        onClose={closePopups}
        delImage={delImage}
        onDelete={handleConfirmDelImage}
      />
      <Footer />
    </div>
  );
}

export default App;
