import React from "react";
import s from "./MyButton.module.scss";

import { Button } from "antd";
import cn from "classnames";

const MyButton = ({ children, className, ...props }) => {
  return (
    <Button className={cn(s.myButton, className)} {...props}>
      {children}
    </Button>
  );
};

export default MyButton;
