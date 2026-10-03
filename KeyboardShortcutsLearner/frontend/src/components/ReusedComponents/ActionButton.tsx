import styled from "styled-components";

type ActionButtonProps = {
  $backgroundColor?: string;
  $textColor?: string;
};

const ActionButton = styled.button<ActionButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  --button-background: ${({ $backgroundColor }) =>
    $backgroundColor ?? "var(--action-background, #80bfff)"};
  background: var(--button-background);
  --button-shadow-color: color-mix(
    in srgb,
    var(--button-background) 65%,
    black
  );
  box-shadow: 0 3px 0 var(--button-shadow-color);
  color: ${({ $textColor }) =>
    $textColor ?? "var(--action-foreground, #14283c)"};
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition:
    filter 140ms ease,
    box-shadow 140ms ease,
    transform 140ms ease;

  &:hover {
    filter: brightness(1.08);
    box-shadow: 0 4px 0 var(--button-shadow-color);
    transform: translateY(-1px);
  }

  &:active {
    filter: brightness(0.97);
    box-shadow: 0 1px 0 var(--button-shadow-color);
    transform: translateY(2px);
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    filter: none;
    opacity: 0.55;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default ActionButton;
