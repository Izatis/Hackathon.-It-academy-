import { Form, Input } from "antd";
import React from "react";
import  s from"./MyInput.module.scss";

const MyInput = ({ minWidth, children, ...props }) => {
  return (
    <div style={{minWidth: minWidth}} className={s.inputBlock}>
      <Input {...props} />
      {children}
    </div>
  );
};

export default MyInput;
