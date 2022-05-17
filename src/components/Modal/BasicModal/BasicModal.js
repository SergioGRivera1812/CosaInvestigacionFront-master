import React from "react";
import { Modal } from "react-bootstrap";
import LogoWhiteTwittor from "../../../assets/png/icono tec.png";

import "./BasicModal.scss";

export default function BasicModal(props) {
  const { show, setShow, children } = props;

  return (
    <Modal
      className="basic-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <img src={LogoWhiteTwittor} alt="Gatos" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
