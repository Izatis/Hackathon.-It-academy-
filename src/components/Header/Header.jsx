import React, { useContext, useState } from "react";
import s from "./Header.module.scss";
import MyButton from "../MUI/MyButton/MyButton";
import { exampleContext } from "../../context";

const languages = [
  { language: "EN", flag: "🇺🇸" },
  { language: "ES", flag: "🇪🇸" },
  { language: "UK", flag: "🇺🇦" },
  { language: "RU", flag: "🇷🇺" },
  { language: "FR", flag: "🇫🇷" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { i18n } = useContext(exampleContext);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header>
      <div className={s.content}>
        <h1>Название</h1>

        <div className={s.buttons}>
          {languages.map((item, index) => {
            return (
              <MyButton
                key={index}
                className={s.defaultBtn}
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
      </div>
    </header>
  );
};

export default Header;
