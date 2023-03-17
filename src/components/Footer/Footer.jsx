import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.module.scss";
import { motion } from "framer-motion";
import { exampleContext } from "../../context";

const Footer = () => {
  // Достаем текущий адрес
  const location = useLocation();
  const { t } = useContext(exampleContext);

  return (
    <footer>
      {/* Сравниваем если пользовотель находится /login здесь  */}
      {location.pathname === "/" || location.pathname === "/login"? (
        <>
          <Link to={"/register"}>
            {/* то показываем вот это */}
            <motion.p initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}>Еще нет аккаунта? </motion.p>
          <motion.a initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}> {t('signUp')}</motion.a>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            {/* в противном случае вот это */}
            <motion.p initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}>Уже есть аккаунт? </motion.p>
          <motion.a initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}> {t('signIn')}</motion.a>
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
