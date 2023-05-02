const http = require("http");
//引入配置
const serverHandle = require("../app");
const port = 8080;

const server = http.createServer(serverHandle);
server.listen(port);
console.log("server is running at 8080");