import React, { useContext } from "react";
import "./Footer.module.scss";
import { Link, useLocation } from "react-router-dom";
import { exampleContext } from "../../context";
import { motion } from "framer-motion";

const Footer = () => {
  // Функция - для смены текста
  const { t } = useContext(exampleContext);

  // Достаем текущий адрес
  const location = useLocation();

  return (
    <footer>
      {/* Сравниваем если пользовотель находится /login здесь  */}
      {location.pathname === "/" || location.pathname === "/login" ? (
        <>
          <Link to={"/register"}>
            {/* то показываем вот это */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {t("footer.0")}
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {t("general.0")}
            </motion.a>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            {/* в противном случае вот это */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {t("footer.1")}
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {t("general.1")}
            </motion.a>
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
