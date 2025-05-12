import { useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Success from "../images/iconsModels/Success.png";
import Failure from "../images/iconsModels/Failure.png";
function Modals({ action, show, setShow }) {
  const handleClose = () => setShow(false);  
  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Image
          src={action ? Success : Failure}
          className="d-block w-25 h-25 mx-2"
        />
        <Modal.Title>
          {action ? "Successful Send" : "Please, Fill Data"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {action
          ? "Sent successfully to Dev.Motaz, please wait for reply 👍👍."
          : `Please,Check all entries to ensure they are not empty OR Invalide Data. ` }
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleClose}
          className={`btn ${
            action ? "bg-success btn-success" : "bg-danger btn-danger"
          }`}
        >
          {action ? "Done" : "Retry"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
