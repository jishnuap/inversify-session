import "reflect-metadata";
import { setup } from "./bootstrap";
import { container } from "./container";

const server = setup(container);

const app = server.build();

app.listen(3000);

console.log("App is listening 3000");
