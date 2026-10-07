import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { IoAddSharp } from "react-icons/io5";
import {
  FaArrowDown,
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { RiDragMove2Fill } from "react-icons/ri";
import { RxKeyboard } from "react-icons/rx";

const HeldKeysContainer = styled.div<{ $position: { x: number; y: number } }>`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  flex-wrap: wrap;
  position: fixed;
  top: ${({ $position }) => $position.y}px;
  left: ${({ $position }) => $position.x}px;
  gap: 10px;
  border-radius: 16px;
  color: var(--shortcut-foreground, #2b333c);
  z-index: 9999;
`;

const HeldKeysDragArea = styled.div`
  cursor: grab;
  user-select: none;
  touch-action: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeldKeysArea = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  flex-wrap: wrap;
  border: 1px solid var(--shortcut-border, #7c9bbd);
  gap: 10px;
  border-radius: 16px;
  background: var(--shortcut-background, #e3e8ee);
  box-shadow: 0 2px 0 var(--shortcut-shadow, #9baec1);
  color: var(--shortcut-foreground, #2b333c);
  z-index: 9999;
  cursor: grab;
  user-select: none;
  touch-action: none;
`;

const KeyCap = styled.kbd`
  padding: 3px 7px;
  border: 1px solid var(--key-border, #b7c2cd);
  border-radius: 3px;
  background: var(--key-background, #fbfcff);
  box-shadow: 0 1px 0 var(--key-shadow, #c8d1da);
  color: var(--key-foreground, #252b32);
  font-family: monospace;
`;

import { useHeldKeys } from "@tanstack/react-hotkeys";

function VisualKeyboard() {
  const heldKeys = useHeldKeys();

  const keyMap: Record<string, React.ReactNode> = {
    ArrowUp: <FaArrowUp />,
    ArrowDown: <FaArrowDown />,
    ArrowLeft: <FaArrowLeft />,
    ArrowRight: <FaArrowRight />,
  };

  const [position, setPosition] = useState({
    x: 100,
    y: 500,
  });

  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;

    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <>
      <HeldKeysContainer
        $position={position}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <HeldKeysDragArea>
          <RiDragMove2Fill size={40} color="white" />
          <RxKeyboard size={50} color="white" />
        </HeldKeysDragArea>
        {heldKeys.length > 0 && (
          <HeldKeysArea>
            {heldKeys.map((key: string, index: number) => {
              return (
                <Fragment key={index}>
                  <KeyCap key={`${key}-${index}`}>{keyMap[key] ?? key}</KeyCap>
                  {index < heldKeys.length - 1 && <IoAddSharp size={20} />}
                </Fragment>
              );
            })}
          </HeldKeysArea>
        )}
      </HeldKeysContainer>
    </>
  );
}

// const VisualKeyboard = () => {
//   const [heldKeys, setHeldKeys] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       setHeldKeys((prev) => {
//         const next = new Set(prev);
//         next.add(event.key);
//         return next;
//       });
//     };

//     const handleKeyUp = (event: KeyboardEvent) => {
//       setHeldKeys((prev) => {
//         const next = new Set(prev);
//         next.delete(event.key);
//         return next;
//       });
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   return (
//     <VisualInputsSC>
//       {[...heldKeys].length > 0 ? [...heldKeys].join(" + ") : "No keys pressed"}
//     </VisualInputsSC>
//   );
// };

export default VisualKeyboard;
