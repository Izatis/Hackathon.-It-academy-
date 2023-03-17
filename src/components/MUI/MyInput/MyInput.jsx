import { Form, Input } from "antd";
import React from "react";
import "./MyInput.css";

const MyInput = ({ label, children, ...props }) => {
  return (
    <div className='input_block'>
      {children}
      <Input {...props} />
    </div>
  );
};

export default MyInput;
