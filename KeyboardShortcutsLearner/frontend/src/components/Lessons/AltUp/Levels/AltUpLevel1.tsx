const AltUpLevel1Description = () => {
  return `
The rocket launch countdown has been jumbled up! Rearrange the countdown into descending order, ending with the liftoff message.
  `;
};

const AltUpLevel1StartCode = () => {
  return `
Console.log("3");
Console.log("4");
Console.log("Blast off!");

Console.log("5");
Console.log("2");

Console.log("1");
    `.trim();
};

const AltUpLevel1SolutionCode = () => {
  return `
Console.log("5");
Console.log("4");
Console.log("3");
Console.log("2");
Console.log("1");
Console.log("Blast off!");
    `.trim();
};

export {
  AltUpLevel1Description,
  AltUpLevel1StartCode,
  AltUpLevel1SolutionCode,
};
