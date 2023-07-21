import React, { useContext, useState } from "react";
import s from "./Header.module.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { exampleContext } from "../../context";
import { AiOutlineGlobal } from "react-icons/ai";

import MyButton from "../UI/MyButton/MyButton";
import MyModal from "../UI/MyModal/MyModal";

const languages = [
  { fullTitle: "English", shortTitle: "EN", flag: "🇺🇸" },
  { fullTitle: "Español", shortTitle: "ES", flag: "🇪🇸" },
  { fullTitle: "Russia", shortTitle: "RU", flag: "🇷🇺" },
  { fullTitle: "France", shortTitle: "FR", flag: "🇫🇷" },
  { fullTitle: "Ukraine", shortTitle: "UK", flag: "🇺🇦" },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18next } = useContext(exampleContext);

  return (
    <>
      <header className={s.header}>
        <div className="container">
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
              <div className={s.header__languageBtns}>
                {languages.map((language, index) => (
                  <MyButton
                    key={index}
                    onClick={() => (
                      setActiveTab(index),
                      i18next.changeLanguage(language.shortTitle)
                    )}
                  >
                    <span>
                      {language.shortTitle}
                      {activeTab === index && <span>({language.flag})</span>}
                    </span>
                  </MyButton>
                ))}
              </div>
              <MyButton
                className={s.header__languageBtn}
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <AiOutlineGlobal />
              </MyButton>
              {location.pathname === "/" ||
              location.pathname === "/register" ? (
                <MyButton
                  className={s.header__authBtn}
                  onClick={() => navigate("/login")}
                >
                  {t("general.1")}
                </MyButton>
              ) : (
                <MyButton
                  className={s.header__authBtn}
                  onClick={() => navigate("/register")}
                >
                  {t("general.0")}
                </MyButton>
              )}
            </div>
          </div>
        </div>
      </header>
      <MyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        languages={languages}
      />
    </>
  );
};

export default Header;
