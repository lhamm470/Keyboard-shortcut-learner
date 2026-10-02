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
    border-top-color: black;
  }
`;

const ResultsLeaderboard = () => {
  const [show, setShow] = useState(false);
  const {
    completionTimeMinutes,
    completionTimeSeconds,
    completionTimeMilliseconds,
    gameState,
    setGameState,
  } = useIsDoingLevelContext();

  useEffect(() => {
    if (gameState == GameState.COMPLETED) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [gameState]);

  return (
    <>
      <ModalContent
        show={show}
        onHide={() => {
          setGameState(GameState.IDLE);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Level Complete! New Personal Best!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>You won!</h3>
          <p>
            Your time was{" "}
            {completionTimeMinutes == 0
              ? ""
              : completionTimeMinutes.toString() + "m"}
            {completionTimeSeconds.toString()}s{" "}
            {Math.floor(completionTimeMilliseconds / 10)
              .toString()
              .padStart(2, "0")}
            ms.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setGameState(GameState.IDLE)}>Close</Button>
          <Button>Next Page</Button>
        </Modal.Footer>
      </ModalContent>
    </>
  );
};

export default ResultsLeaderboard;
