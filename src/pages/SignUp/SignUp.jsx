import React, { Suspense, useContext, useState } from "react";
import s from "./SignUp.module.scss";
import { exampleContext } from "../../context";
import { motion } from "framer-motion";
import axios from "axios";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import eye from "../../assets/eye.png";

import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import Loading from "../../components/Loading/Loading";
import { AirplaneModel } from "../../models/AirplaneModel";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // Данные пользователя для регистрации
  const [userRegister, setUserRegister] = useState({
    username: "test",
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

  // Отправляем post запрос,  и за одно проверяется, потом  создает пользователя и перенапраляется на профиль
  const BASE_URL = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userRegister.username.length === 0 ||
      userRegister.email.length === 0 ||
      userRegister.password.length === 0
    ) {
      setError(true);
    } else {
      // Проверка для email инпута
      const regex = /^[A-Za-z0-9._%+-]+@(gmail\.com|mail\.ru)$/i;
      const isValidEmail = regex.test(userRegister.email);
      if (!isValidEmail) {
        setErrorMessage("Разрешены только адреса Gmail или Mail.ru");
      } else {
        setIsLoading(false);
        setErrorMessage("");
        try {
          await axios
            .post(BASE_URL + "/register", userRegister)
            .then((response) =>
              localStorage.setItem("token", JSON.stringify(response.data.token))
            );

          // Достаем токен пользовотеля
          const token = JSON.parse(localStorage.getItem("token"));

          if (!!token) {
            navigate("/");
          }

          setUserRegister({
            username: "",
            email: "",
            password: "",
          });
        } catch (error) {
          setErrorMessage(error.response.data.error);
        }
        setIsLoading(true);
      }
    }
  };

  // ------------------------------------------------------
  // Это состояние скрытие пароля
  const { type, passwordHide } = useContext(exampleContext);

  const navigate = useNavigate();

  return (
    <section className={s.signUp}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        className={s.signUp__model}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          className={s.title}
        >
          {t("general.2")}
        </motion.h1>
        <Canvas camera={{ position: [2, 0, -4], zoom: 1 }}>
          <OrbitControls />
          <color attach="background" />
          <hemisphereLight intensity={0.35} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <Suspense fallback={null}>
            <AirplaneModel />
          </Suspense>
        </Canvas>
      </motion.div>

      {isLoading ? (
        <div className={s.signUp__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            {t("form.0")}
          </motion.h1>
          <form className={s.signUp__form} onSubmit={handleSubmit}>
            <MyInput
              placeholder={t("form.2")}
              type="name"
              value={userRegister.username}
              onChange={(e) =>
                setUserRegister({ ...userRegister, username: e.target.value })
              }
            ></MyInput>

            {/* Здесь проверяется присутствие поли в инпуте */}
            {error && userRegister.username.length <= 0 ? (
              <div className={s.error}>
                <p>Введите имю!</p>
              </div>
            ) : (
              ""
            )}

            <MyInput
              placeholder={t("form.3")}
              type="email"
              value={userRegister.email}
              onChange={(e) =>
                setUserRegister({ ...userRegister, email: e.target.value })
              }
            ></MyInput>

            {/* Здесь проверяется присутствие поли в инпуте */}
            {error && userRegister.email.length <= 0 ? (
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
              value={userRegister.password}
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
            >
              <span className={s.hidePasswordIcon} onClick={passwordHide}>
                <img src={eye} alt="eye" />
              </span>
            </MyInput>

            {/* Здесь проверяется присутствие поли в инпуте */}
            {error && userRegister.password.length <= 0 ? (
              <div className={s.error}>
                <p>Введите пароль!</p>
              </div>
            ) : null}

            {/* Это сравнение проверяет на содержания инпутов и изменяет кнопки */}
            {!!userRegister.username.length &&
            !!userRegister.email.length &&
            !!userRegister.password.length ? (
              <MyButton className={s.enter} htmlType="submit">
                {t("form.5")}
              </MyButton>
            ) : (
              <MyButton className={s.disabled} htmlType="submit">
                {t("form.5")}
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

export default SignUp;
