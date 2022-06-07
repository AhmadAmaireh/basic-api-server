'use strict';
require("dotenv").config();
let PORT = procss.env.PORT || 3000;
const server = require("./src/server");

server.start();



