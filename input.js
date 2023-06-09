// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //type something
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  if (data === "h") {
    connection.write(`Say: Hey`);
  }

  if (data === "t") {
    connection.write(`Say: Thanks`);
  }
  if (data === "l") {
    connection.write(`Say: lol`);
  }

  if (data === "\u0003") {
    console.log("bye");
    process.exit();
  }
};


module.exports = {
  setupInput,
};