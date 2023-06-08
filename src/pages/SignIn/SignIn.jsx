import React, {  useContext, useState } from "react";
import s from "./SignIn.module.scss";
import { exampleContext } from "../../context";
import { motion } from "framer-motion";
import axios from "axios";
import gif from "../../assets/long-version-v4.gif";
import eye from "../../assets/eye.png";

import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // Данные пользователя для авторизации
  const [userLogin, setUserLogin] = useState({
    email: "test@gmail.com",
    password: "123456",
  });

  // Функция - для смены текста
  const { t } = useContext(exampleContext);

  // Здесь я достаю состояние загрузку, (общий)
  const { isLoading, setIsLoading } = useContext(exampleContext);

  // Состояние - для проверки присутствие поли в инпутах
  const [error, setError] = useState(false);

  // Состояние - сообщения ошибки для email инпута, и для сообщения ошибки от сервера
  const [errorMessage, setErrorMessage] = useState("");
  
  // Отправляем post запрос и за одно проверяется пользователь
  const BASE_URL = "http://localhost:8080";

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userLogin.email.length === 0 || userLogin.password.length === 0) {
      setError(true);
    } else {
      // Проверка для email инпута
      const regex = /^[A-Za-z0-9._%+-]+@(gmail\.com|mail\.ru)$/i;
      const isValidEmail = regex.test(userLogin.email);
      if (!isValidEmail) {
        setErrorMessage("Разрешены только адреса Gmail или Mail.ru");
      } else {
        setIsLoading(false);
        setErrorMessage("");
        try {
          await axios
            .post(BASE_URL + "/login", userLogin)
            .then((response) =>
              localStorage.setItem("token", JSON.stringify(response.data.token))
            );

          // Достаем токен пользовотеля
          const token = JSON.parse(localStorage.getItem("token"));

          if (!!token) {
            navigate("/f");
          }

          setUserLogin({
            email: "",
            password: "",
          });
        } catch (error) {
          setErrorMessage(error.response.data.error);
        }
        setIsLoading(false);
      }
    }
  };

  // ------------------------------------------------------
  // Это состояние скрытие пароля
  const { type, passwordHide } = useContext(exampleContext);

  return (
    <section className={s.signIn}>
      <motion.img
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        className={s.signIn_wallpaper}
        src={gif}
        alt="wallpaper"
      />

      {isLoading ? (
        <div className={s.signIn__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            {t("form.1")}
          </motion.h1>

          <form className={s.signIn__form} onSubmit={handleSubmit}>
            <MyInput
              placeholder={t("form.3")}
              type="email"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            ></MyInput>

            {/* Здесь проверяется присутствие поли в инпуте */}
            {error && userLogin.email.length <= 0 ? (
              <div className={s.error}>
                <p>Введите e-mail!</p>
              </div>
            ) : null}
            
            {/* Здесь проверяется сообщения ошибки для email инпута, и для сообщения ошибки от сервера */}
            {errorMessage && (
              <div className={s.error}>
                <p>{errorMessage}</p>
              </div>
            )}

            <MyInput
              placeholder={t("form.4")}
              type={type}
              minLength={4}
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            >
              <span className={s.hidePasswordIcon} onClick={passwordHide}>
                <img src={eye} alt="eye" />
              </span>
            </MyInput>

            {/* Здесь проверяется присутствие поли в инпуте */}
            {error && userLogin.password.length <= 0 ? (
              <div className={s.error}>
                <p>Введите пароль!</p>
              </div>
            ) : null}


            {/* Это сравнение проверяет на содержания поля инпутов и изменяет кнопки */}
            {!!userLogin.email.length && !!userLogin.password.length ? (
              <MyButton className={s.enter} htmlType="submit">
                {t("form.6")}
              </MyButton>
            ) : (
              <MyButton className={s.disabled} htmlType="submit">
                {t("form.6")}
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
