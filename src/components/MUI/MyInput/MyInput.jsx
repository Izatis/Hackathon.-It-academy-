import { Form, Input } from "antd";
import React from "react";
import "./MyInput.css";

const MyInput = ({ minWidth, children, ...props }) => {
  return (
    <div style={{minWidth: minWidth}} className='input_block'>
      {children}
      <Input {...props} />
    </div>
  );
};

export default MyInput;
