import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import codeDemoVideo from "../../../../assets/Videos/code-demo-1.mp4";

const AltUpLevel1 = () => {
  const minutes = 0;
  const seconds = 5;
  const milliseconds = 500;

  return {
    description:
      "The rocket launch countdown has been jumbled up! Rearrange the countdown into descending order, ending with the liftoff message.",
    targetTime: {
      minutes,
      seconds,
      milliseconds,
      totalMilliseconds: minutes * 60_000 + seconds * 1_000 + milliseconds,
    },
    startCode: `
Console.log("3");
Console.log("4");
Console.log("Blast off!");

Console.log("5");
Console.log("2");

Console.log("1");
    `.trim(),
    solutionCode: `
Console.log("5");
Console.log("4");
Console.log("3");
Console.log("2");
Console.log("1");
Console.log("Blast off!");
    `.trim(),
    exampleSolution: codeDemoVideo,
    possibleKeyboardShortcuts: [
      {
        name: "Alt Up/Down",
        keys: [
          "alt",
          <>
            <FaArrowUp /> / <FaArrowDown />
          </>,
        ],
      },
      {
        name: "Shift Alt Up/Down",
        keys: [
          "shift",
          "alt",
          <>
            <FaArrowUp /> / <FaArrowDown />
          </>,
        ],
      },
      {
        name: "Shift Up/Down",
        keys: [
          "shift",
          <>
            <FaArrowUp /> / <FaArrowDown />
          </>,
        ],
      },
    ],
  };
};

export { AltUpLevel1 };
