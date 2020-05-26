/*

This project is not connecting to the postgreSQL db and that is causing the server to error out.
Need to troubleshoot this
Also should upgrade modules to Typescript to minimize warnings

*/

import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";
import { PORT, HOST } from "./config.js";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`App is running on port ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
