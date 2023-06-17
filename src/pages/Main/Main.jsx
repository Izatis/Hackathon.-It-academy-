import React, { useContext, useState } from "react";
import s from "./Main.module.scss";

import { motion } from "framer-motion";
import { exampleContext } from "../../context";
import img from "../../assets/airplane.png";
import copy from "../../assets/copy.png";

import MyButton from "../../components/UI/MyButton/MyButton";
import MyInput from "../../components/UI/MyInput/MyInput";

const Main = () => {
  const [active, setActive] = useState(true);
  const [activeSecond, setActiveSecond] = useState(true);

  // Функция - для смены текста
  const { t } = useContext(exampleContext);
  const [phr, setPhr] = useState({
    pnrInfo: "",
  });

  return (
    <section className={s.main}>
      <div className={s.main__leftBlock}>
        <img src={img} alt="img" />
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {t("hero.leftBlock.title")}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {t("hero.leftBlock.description")}
        </motion.p>

        <div className={s.example}>
          <motion.ol
          className={s.ol}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            <li>TS 275 J 15OCT 4 LGWYVR HK1 1010 1200 332 E 0</li>
            <li>AC8097 Y 15OCT 4 YVRSEA HK1 1335 1435 DH4 E 0</li>
            <li>AS2254 F 17OCT 6 SEAPDX HK1 1700 1753 E75 E 0</li>
            <li>AA7007 J 17OCT 6 PDXLHR HK1 1845 1210+1 788 E 0</li>
          </motion.ol>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            <li>{t("hero.leftBlock.examples.1")}</li>
            <li>{t("hero.leftBlock.examples.2")}</li>
            <li>{t("hero.leftBlock.examples.3")}</li>
            <li>{t("hero.leftBlock.examples.0")}</li>
          </motion.ul>
        </div>
      </div>
      <div className={s.main__rightBlock}>
        <div>
          <label htmlFor="">
            {t("hero.rightBlock.label")}
            <MyInput
              onChange={(e) => setPhr({ pnrInfo: e.target.value })}
              style={{ maxWidth: 700 }}
              placeholder={t("hero.rightBlock.placeholder")}
            />
          </label>

          <div className={s.info}>
            <header className={s.info__header}>
              <div>
                <span>{t("hero.rightBlock.info.0")}</span>
                <p>https://aviato.me/509ffb2eca</p>
              </div>
              <p>
                <h1>TT</h1>
                {t("hero.rightBlock.info.1")}
              </p>
              <p>
                <img src={copy} alt="copy" />
                {t("hero.rightBlock.info.2")}
              </p>
            </header>
            <div className={s.info__content}>
              <h1>{t("hero.rightBlock.info.3")}</h1>
              <div className={s.flights}>
                <div className={s.flights__items}>
                  <div>
                    <p>{t("hero.rightBlock.info.4")}</p>
                    <p>
                      <strong>10:10</strong>, {t("hero.rightBlock.info.5")}
                    </p>
                  </div>
                  <span>Air Transat</span>
                  <div>
                    <p>{t("hero.rightBlock.info.6")}</p>
                    <p>
                      <strong>12:00</strong>
                    </p>
                  </div>
                </div>
                <br />
              </div>
              <div className={s.info__btns}>
                <MyInput
                  style={{ maxWidth: 70, border: "none" }}
                  type="number"
                  min="5"
                  minWidth={105.3}
                >
                  {t("hero.rightBlock.info.7")}
                </MyInput>
                <MyButton
                  className={activeSecond ? s.active : s.include}
                  onClick={() => setActive(false)}
                >
                  {t("hero.rightBlock.info.8")}
                </MyButton>
                <MyButton
                  className={active ? s.active : s.include}
                  onClick={() => setActiveSecond(false)}
                >
                  {t("hero.rightBlock.info.9")}
                </MyButton>
                <MyButton className={s.active}>
                  {t("hero.rightBlock.info.10")}
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
