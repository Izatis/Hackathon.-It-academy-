import React, { useContext, useEffect, useState } from "react";
import s from "./Main.module.scss";
import img from "../../assets/airplane.png";
import { motion } from "framer-motion";
import MyInput from "../../components/MUI/MyInput/MyInput";
import { exampleContext } from "../../context";
import MyButton from "../../components/MUI/MyButton/MyButton";
import { Input } from "antd";
import copy from "../../assets/copy.png";
import axios from "axios";
import classNames from 'classnames'


const Main = () => {
  const { t } = useContext(exampleContext);
  const [data, setData] = useState([])
  console.log(data);
  
  useEffect(() => {
    axios.post('http://localhost:9090/admin').then((res) => {
    setData(res)
  })
  },[])

  const [active, setActive] = useState(true)
  const [activeSecond, setActiveSecond] = useState(true)
  console.log(active);
  console.log(activeSecond);

  return (
    <section className={s.main}>
      <div className={s.content}>
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
          {t("title")}
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
          {t("description")}
        </motion.p>

        <div className={s.example}>
          <motion.ol
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
            <li>{t("exampleFirst")}</li>
            <li>{t("exampleSecond")}</li>
            <li>{t("exampleThree")}</li>
            <li>{t("exampleFour")}</li>
          </motion.ul>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <label style={{ width: "100%" }} htmlFor="">
          {t("label")}
          <MyInput style={{ maxWidth: 700}} placeholder={t("placeholder")} />
        </label>

        <div className={s.info}>
          <header>
            <div>
              <span>Ссылка создана:</span>
              <p>https://aviato.me/509ffb2eca</p>
            </div>
            <p><h1>TT</h1> Копировать текстом</p>
            <p><img src={copy} alt="copy" /> Копировать ссылку</p>
          </header>
          <div className={s.text_content}>
            <h1>{t("info_text")}</h1>
            <div className={s.flights}>
              <div className={s.items}>
                <div className={s.item}>
                  <p>Лондон</p>
                  <p>
                    <strong>10:10</strong>, 15 окт
                  </p>
                </div>
                <span>Air Transat</span>
                <div className={s.item}>
                  <p>Ванкувер</p>
                  <p>
                    <strong>12:00</strong>
                  </p>
                </div>
              </div>
              <br />

              <div className={s.info_btn}>
             
                <MyInput  style={{ maxWidth: 70 , border: 'none'}} min="5"  type="number">Цена:</MyInput>
                <MyButton  className={activeSecond ? s.active : s.include} onClick={()=> setActive(false)}>Багаж включён</MyButton>
                <MyButton className={active ?  s.active : s.include} onClick={()=> setActiveSecond(false)}>Только ручная кладь</MyButton>
                <MyButton className={s.active}>+ Своя метка</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
