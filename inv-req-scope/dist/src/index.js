"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const bootstrap_1 = require("./bootstrap");
const container_1 = require("./container");
const server = bootstrap_1.setup(container_1.container);
const app = server.build();
app.listen(3000);
console.log("App is listening 3000");
