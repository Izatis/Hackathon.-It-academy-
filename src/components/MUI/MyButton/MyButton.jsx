import React from "react";
import s from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
