import demo1 from "../../../../assets/Videos/altUpDemo1.mp4";
import demo2 from "../../../../assets/Videos/altUpDemo2.mp4";

const AltUpLearn1 = () => {
  return {
    definition: "Move line up",
    content: [
      {
        text: "Switches the current line with the line above, effectively moving it up.",
        demonstrationClipIndex: 1,
      },
      {
        text: "Works with any cursor position in the line or with highlighted text.",
      },
      {
        text: "If the highlighted text spans more than one line, those lines can be moved at the same time.",
        demonstrationClipIndex: 2,
      },
    ],
    demonstrationClips: [demo1, demo2],
  };
};

export { AltUpLearn1 };
