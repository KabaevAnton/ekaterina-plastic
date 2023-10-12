import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(props) { 
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  function chgLogin(e) {
    setLogin(e.target.value)
  }

  function chgPwd(e) {
    setPwd(e.target.value)
  }
  
  function handSubmit(e) {
    e.preventDefault();
      
      props.onLogin({
        username: login,
        password: pwd,
      })
  }

  return (
    <section className="login">
      <div className="login__auth">
        <form className="login__form" onSubmit={handSubmit}>
          <h2 className="login__title">Авторизация</h2>
          <fieldset className="login__form-set">
            <input
              className="login__input"
              type="text"
              name="login"
              placeholder="Логин"
              value={login || ''}
              onChange={chgLogin}
              required
            />
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Пароль"
              value={pwd || ''}
              onChange={chgPwd}
              required
            />
            {/* <p className="login__remember">
              <input
                className="login__ceckbox"
                type="checkbox"
                name="checkbox"
                value={props.isChecked}
                onChange={props.onCheck}
              />
              <label className="login__label">Запомнить меня</label>
            </p> */}
          </fieldset>
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <Link to='/' className="login__link">На главную</Link>
      </div>
    </section>
  );
}

export default Login;
