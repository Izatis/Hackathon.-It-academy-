import React, { useContext } from "react";
import s from "./Footer.module.scss";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { exampleContext } from "../../context";

const Footer = () => {
  // Достаем текущий адрес
  const location = useLocation();
  // Функция - для смены текста
  const { t } = useContext(exampleContext);

  return (
    <footer className={s.footer}>
      {/* Сравниваем если пользовотель находится /login здесь  */}
      {location.pathname === "/" || location.pathname === "/login" ? (
        // то показываем вот это
        <motion.span
          className={s.footer__content}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <p>{t("footer.0")}</p>
          <Link to={"/register"}>{t("general.0")}</Link>
        </motion.span>
      ) : (
        // в противном случае вот это
        <motion.span
          className={s.footer__content}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <p>{t("footer.1")}</p>
          <Link to={"/login"}>{t("general.1")}</Link>
        </motion.span>
      )}
    </footer>
  );
};

export default Footer;
