import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useIsDoingLevelContext } from "../../UseIsDoingLevelContext";
import { GameState } from "../../IsDoingLevelContext";
import { LevelDataType } from "./CustomTypes";

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

type ResultsLeaderboardProps = {
  levelData: LevelDataType;
};

const ResultsLeaderboard = ({ levelData }: ResultsLeaderboardProps) => {
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

  const completionMilliseconds: number =
    completionTimeMinutes * 60000 +
    completionTimeSeconds * 1000 +
    completionTimeMilliseconds;

  const beatTargetTime: boolean =
    completionMilliseconds <= levelData.targetTime.totalMilliseconds;

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
          <Modal.Title>
            {beatTargetTime ? "Level complete!" : "Level failed!"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Target time:{" "}
            {levelData.targetTime.minutes == 0
              ? ""
              : levelData.targetTime.minutes.toString() + "m"}
            {levelData.targetTime.seconds.toString()}s{" "}
            {Math.floor(levelData.targetTime.milliseconds / 10)
              .toString()
              .padStart(2, "0")}
            ms.
          </p>
          <p>
            Your time:{" "}
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
