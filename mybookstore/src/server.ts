//import errorHandler from "errorhandler";

import app from "./index";

/**
 * Error Handler. Provides full stack - remove for production
 */
//app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
   console.log("  Press CTRL-C to stop\n");
   console.log(" please run front-end and mongod as well\n");
   console.log("add book at localhost/4000 \n");
});

export default server;
// THIS LINE MUST RUN ON COMMAND!!!      mongod --dbpath=/data
