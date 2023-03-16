import React, { useContext } from "react";
import s from "./Main.module.scss";
import Layout from "../../components/Layout/Layout";
import img from "../../assets/airplane.png";
import { motion } from "framer-motion";
import MyInput from "../../components/MUI/MyInput/MyInput";
import { exampleContext } from "../../context";
import './Main.css'
import cn from "classnames";
const Main = () => {
  const { t } = useContext(exampleContext);
  return (
    <Layout>
      <section className={s.main}>
        <div className={s.body}>
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

              <div class="container">
                <span class="circle">
                  <i class="fa fa-arrow-down"></i>
                </span>
                <span class="pulse"></span>
              </div>
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
        </div>
        <MyInput label={t("label")} placeholder={t("placeholder")} />

        <div className={s.signIn}>
          <span className={s.signIn_btn}>{t("signIn")}</span>
        </div>
      </section>
    </Layout>
  );
};

export default Main;
