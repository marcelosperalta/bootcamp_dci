exports.showHelp = () => {
    const helpText = `
      How to use this program:
      1. When you input a new string with more than 1 space the program will sanitize it for you;
      2. If you typed the name of a city without capitalization the program will capitalize it for you;
      3. If you included a capitalized letter in the wrong place of your string the program will sanitize it for you.
      `;
    console.log(helpText);
};