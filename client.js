const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`);
    conn.write('Name: KWN')
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 1000);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });


  return conn;
};

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


module.exports = { connect };
