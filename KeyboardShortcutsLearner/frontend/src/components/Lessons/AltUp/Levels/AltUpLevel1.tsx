import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const AltUpLevel1 = () => {
  return {
    description:
      "The rocket launch countdown has been jumbled up! Rearrange the countdown into descending order, ending with the liftoff message.",
    targetTime: { minutes: 0, seconds: 5, milliseconds: 500 },
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
