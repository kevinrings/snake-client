// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //type something
  return stdin;
};

const handleUserInput = function (data) {
  // your code here

  if (data === "\u0003") {
    console.log("bye");
    process.exit();
  }
};

setupInput();

module.exports = {
  setupInput,
};