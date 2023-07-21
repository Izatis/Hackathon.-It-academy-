import React, { useContext } from "react";
import s from "./MyModal.module.scss";

import { Col, Modal, Row } from "antd";
import { exampleContext } from "../../../context";

import MyButton from "../MyButton/MyButton";

const MyModal = ({ isModalOpen, setIsModalOpen, languages }) => {
  const { t, i18next } = useContext(exampleContext);

  return (
    <Modal
      title="Выберите язык"
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen(false)}
    >
      <Row className={s.row} justify="center" gutter={[20, 20]}>
        {languages.map((language) => (
          <Col md={8} sm={12} xs={24}>
            <MyButton
              onClick={() => i18next.changeLanguage(language.shortTitle)}
              icon={language.flag}
              block
            >
              {language.fullTitle}
            </MyButton>
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default MyModal;
