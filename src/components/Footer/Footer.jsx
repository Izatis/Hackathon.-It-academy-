import React, { useContext } from "react";
import s from "./Footer.module.scss";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { exampleContext } from "../../context";

const Footer = () => {
  const location = useLocation();
  const { t } = useContext(exampleContext);

  return (
    <footer className={s.footer}>
      {location.pathname === "/" || location.pathname === "/login" ? (
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
          <span>{t("footer.0")}</span>
          <Link to={"/register"}>{t("general.0")}</Link>
        </motion.span>
      ) : (
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
          <span>{t("footer.1")}</span>
          <Link to={"/login"}>{t("general.1")}</Link>
        </motion.span>
      )}
    </footer>
  );
};

export default Footer;
