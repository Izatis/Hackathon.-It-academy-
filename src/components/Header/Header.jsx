import React, { useContext, useState } from "react";
import s from "./Header.module.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { exampleContext } from "../../context";

import MyButton from "../UI/MyButton/MyButton";

const languages = [
  { language: "EN", flag: "🇺🇸" },
  { language: "ES", flag: "🇪🇸" },
  { language: "UK", flag: "🇺🇦" },
  { language: "RU", flag: "🇷🇺" },
  { language: "FR", flag: "🇫🇷" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Функции - для смены текста
  const { t, i18next } = useContext(exampleContext);

  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          className={s.header__logo}
          onClick={() => navigate("/")}
        >
          PnrReader
        </motion.h1>

        <div className={s.header__btns}>
          {languages.map((item, index) => {
            return (
              <MyButton
                key={index}
                className={s.btn}
                onClick={() => (
                  setActiveTab(index), i18next.changeLanguage(item.language)
                )}
              >
                <span>
                  {item.language}
                  {activeTab === index && <span>({item.flag})</span>}
                </span>
              </MyButton>
            );
          })}

          {location.pathname === "/" || location.pathname === "/register" ? (
            <MyButton className={s.auth} onClick={() => navigate("/login")}>
              {t("general.1")}
            </MyButton>
          ) : (
            <MyButton className={s.auth} onClick={() => navigate("/register")}>
              {t("general.0")}
            </MyButton>
          )}
        </div>
      </div>
      <div className={s.header__btns_clone}>
        {languages.map((item, index) => {
          return (
            <MyButton
              key={index}
              className={s.btn_clone}
              onClick={() =>
                activeTab === index
                  ? setActiveTab(null)
                  : setActiveTab(index, i18next.changeLanguage(item.language))
              }
            >
              <span>
                {item.language}
                {activeTab === index && <span>({item.flag})</span>}
              </span>
            </MyButton>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
