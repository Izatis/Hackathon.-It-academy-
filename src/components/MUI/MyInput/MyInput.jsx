import { Form, Input } from "antd";
import React from "react";
import "./MyInput.css";

const MyInput = ({ label, ...props }) => {
  return (
    <Form.Item label={label}>
      <Input {...props}/>
    </Form.Item>
  );
};

export default MyInput;
