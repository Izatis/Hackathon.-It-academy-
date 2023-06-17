import React from "react";
import s from "./MyInput.module.scss";

import { Input } from "antd";

const MyInput = ({ minWidth, children, ...props }) => {
  return (
    <div style={{ minWidth: minWidth }} className={s.inputBlock}>
      <Input {...props} />
      {children}
    </div>
  );
};

export default MyInput;
