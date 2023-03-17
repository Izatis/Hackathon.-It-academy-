import { Button } from "antd";
import React from "react";
import s from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MyButton;
