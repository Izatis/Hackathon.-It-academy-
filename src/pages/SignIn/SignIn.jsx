import React, { Suspense, useContext, useState } from "react";
import s from "./SignIn.module.scss";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import MyInput from "../../components/MUI/MyInput/MyInput";
import MyButton from "../../components/MUI/MyButton/MyButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import eye from "../../assets/eye.png";
import { exampleContext } from "../../context";
import wallpaper from '../../assets/wallpaper.png'
import { motion } from "framer-motion";

const SignIn = () => {
  // Здесь сохраняется сообщение от сервера
  const [message, setMessage] = useState("");

//   Здесь я достаю состояние загрузки, с помощи хука useContext()
  const { isLoading, setIsLoading } = useContext(exampleContext);

  // Это состояние скрытие пароля
  const { type, passwordHide } = useContext(exampleContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

//   Отправляем post запрос и за одно проверяется пользователь и перенапраляется на профиль
  const verifyUser = async () => {
    setIsLoading(false);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        userLogin
      );
      localStorage.setItem("token", JSON.stringify(data.token));
      const token = JSON.parse(localStorage.getItem("token"));
      const loginOpen = () => {
        if (!!token) {
          navigate("/");
        }
      };
      loginOpen();
      setIsLoading(true);
    } catch (error) {
      setMessage(error.response.data.error);
    }
    setIsLoading(true);
  };

  return (
      <section className={s.sign_in}>
       <motion.img initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }} className={s.sign_in_wallpaper} src={'https://cdn.dribbble.com/users/112518/screenshots/4612754/long-version-v4.gif'} alt="wallpaper" />

        {isLoading ? (
          <div className={s.sign_in_content}>

            <motion.h1 initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}>Вход</motion.h1>
            <form className={s.sign_in_inputs_btn}>
              <MyInput
                value={userLogin.email}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
                type="email"
                placeholder="E-mail"
              >
              </MyInput>

              <MyInput
                value={userLogin.password}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
                type={type}
                placeholder="Пароль"
              >
                <span className={s.sign_in_hide_password} onClick={passwordHide}>
                  <img src={eye} alt="eye" />
                </span>
              </MyInput>
              {/* Здесь проверяется присутствие сообщении от сервера */}
              {!!message.length && <span className={s.sign_in_message}>{message}</span>}

              {/* Это сравнение проверяет на содержания инпутов и изменяет кнопки */}
              {!!userLogin.email.length && !!userLogin.password.length ? (
                <MyButton
                className={s.enter}
                  onClick={verifyUser}
                 
                >
                  Войти
                </MyButton>
              ) : (
                <MyButton
                className={s.enter}
                disabled

                >
                  Войти
                </MyButton>
              )}
            </form>
          </div>
        ) : (
          <Loading />
        )}
      </section>
  );
};

export default SignIn;