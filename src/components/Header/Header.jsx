import React, { useContext, useState } from "react";
import s from "./Header.module.scss";
import MyButton from "../MUI/MyButton/MyButton";
import { exampleContext } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const languages = [
  { language: "EN", flag: "🇺🇸" },
  { language: "ES", flag: "🇪🇸" },
  { language: "UK", flag: "🇺🇦" },
  { language: "RU", flag: "🇷🇺" },
  { language: "FR", flag: "🇫🇷" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { t, i18n } = useContext(exampleContext);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <div className={s.content}>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          className={s.logo}
          onClick={() => navigate("/")}
        >
          MainTEAM
        </motion.h1>

        <div className={s.header_btn}>
          <div className={s.language_btn}>
            {languages.map((item, index) => {
              return (
                <MyButton
                  key={index}
                  className={s.btn}
                  onClick={() =>
                    activeTab === index
                      ? setActiveTab(null)
                      : setActiveTab(index, changeLanguage(item.language))
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
          {location.pathname === "/" || location.pathname === "/register" ? (
            <MyButton className={s.sign_in} onClick={() => navigate("/register")}>
              {t("signIn")}
            </MyButton>
          ) : (
            <MyButton className={s.sign_in} onClick={() => navigate("/login")}>
              {t("signUp")}
            </MyButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
