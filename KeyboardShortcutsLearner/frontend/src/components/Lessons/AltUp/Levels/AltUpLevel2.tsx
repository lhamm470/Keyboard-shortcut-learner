import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import altUpExampleSolution from "../../../../assets/Videos/altUpExampleSolution.mp4";

const AltUpLevel2 = () => {
  const minutes = 0;
  const seconds = 2;
  const milliseconds = 500;

  return {
    description: "Move the code after the while loop to inside the while loop.",
    targetTime: {
      minutes,
      seconds,
      milliseconds,
      totalMilliseconds: minutes * 60_000 + seconds * 1_000 + milliseconds,
    },
    startCode: `
let count = 0;
while (count < 10) {
    count++;
}

Console.log(count);
if (count % 2 == 0) {
    Console.log(\`\${count} is divisible by 2\`)
}
    `.trim(),
    solutionCode: `
let count = 0;
while (count < 10) {
    count++;
    Console.log(count);
    if (count % 2 == 0) {
        Console.log(\`\${count} is divisible by 2\`)
    }
}
    `.trim(),
    exampleSolution: altUpExampleSolution,
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

export { AltUpLevel2 };
