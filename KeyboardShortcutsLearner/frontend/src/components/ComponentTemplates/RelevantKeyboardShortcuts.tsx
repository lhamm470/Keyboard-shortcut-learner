import { Fragment, useState, type ReactNode } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RelevantKeyboardShortcutsHelp from "../ReusedComponents/RelevantKeyboardShortcutsHelp";
import ActionButton from "../ReusedComponents/ActionButton.tsx";

type Shortcut = {
  name: string;
  keys: ReactNode[];
};

type RelevantKeyboardShortcutsProps = {
  shortcuts: Shortcut[];
};

const RelevantKeyboardShortcutsDropdownButton = styled(ActionButton)`
  margin-bottom: 10px;
  margin-right: 5px;
`;

const ShortcutTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 8px 12px;
  border: 1px solid var(--shortcut-border, #7c9bbd);
  border-radius: 16px;
  background: var(--shortcut-background, #e3e8ee);
  box-shadow: 0 2px 0 var(--shortcut-shadow, #9baec1);
  color: var(--shortcut-foreground, #2b333c);
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

const Plus = styled.span`
  font-size: 20px;
  color: var(--shortcut-plus, #3e6890);
`;

const ShortcutsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const GoldStar = styled(FontAwesomeIcon).attrs({
  icon: faStar,
})`
  width: 20px;
  height: 20px;
  color: #ffd700;
`;

const RelevantKeyboardShortcuts = ({
  shortcuts,
}: RelevantKeyboardShortcutsProps) => {
  const [showShortcutTags, setShowShortcutTags] = useState(false);

  return (
    <>
      <RelevantKeyboardShortcutsDropdownButton
        onClick={() => setShowShortcutTags(!showShortcutTags)}
      >
        Relevant Keyboard Shortcuts ▼
      </RelevantKeyboardShortcutsDropdownButton>
      <RelevantKeyboardShortcutsHelp></RelevantKeyboardShortcutsHelp>

      {showShortcutTags && (
        <ShortcutsArea>
          {shortcuts.map((shortcut, i) => (
            <ShortcutTag key={`${shortcut.name}`}>
              {shortcut.keys.map((key, index) => (
                <Fragment key={index}>
                  {i == 0 && index == 0 && <GoldStar />}
                  <KeyCap>{key}</KeyCap>
                  {index < shortcut.keys.length - 1 && <Plus>+</Plus>}
                </Fragment>
              ))}
            </ShortcutTag>
          ))}
        </ShortcutsArea>
      )}
    </>
  );
};

export default RelevantKeyboardShortcuts;
