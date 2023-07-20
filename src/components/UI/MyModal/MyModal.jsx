import React from "react";

import { Col, Modal, Row } from "antd";
import MyButton from "../MyButton/MyButton";

const MyModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Выберите язык"
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen(false)}
    >
      <Row justify="center" gutter={[20, 30]} style={{ padding: 10 }}>
        <Col xs={24} sm={12} md={8}>
          <MyButton onClick={() => handleClick("en")} icon={"🇺🇸"} block>
            English
          </MyButton>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <MyButton onClick={() => handleClick("de")} icon={"🇪🇸"} block>
            Deutsch
          </MyButton>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <MyButton onClick={() => handleClick("ru")} icon={"🇷🇺"} block>
            Russia
          </MyButton>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <MyButton onClick={() => handleClick("fr")} icon={"🇫🇷"} block>
            France
          </MyButton>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <MyButton onClick={() => handleClick("uk")} icon={"🇺🇦"} block>
            Ukraine
          </MyButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default MyModal;
