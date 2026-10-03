import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { GameState } from "../../IsDoingLevelContext";

const ModalContent = styled(Modal)`
  .modal-content {
    background-color: gray;
    border-radius: 7px;
  }

  .modal-header {
    border-bottom-color: black;
  }

  .modal-footer {
    border-top-color: gray;
  }
`;

type HowToPlayModalProps = {
  show: boolean;
  setShow: (state: boolean) => void;
};

const HowToPlayModal = ({ show, setShow }: HowToPlayModalProps) => {
  return (
    <>
      <ModalContent
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>How To Play</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Update the code in the left editor to match the goal code on the
            right. Use keyboard shortcuts to finish as quickly as possible. Beat
            the target time to complete the level.
          </p>
          <p>
            To start, position the cursor anywhere inside the editor. The next
            keyboard input (or mouse selection) will automatically start the
            timer.
          </p>
          <p>Leaving focus of the editor will cancel the current attempt.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </ModalContent>
    </>
  );
};

export default HowToPlayModal;
