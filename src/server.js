"use strict";

import setupApp from "./app";

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(3333, () =>
      console.log("Server is listening in localhost:3333")
    );

    const existSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];

    existSignals.map((sig) => {
      process.on(sig, () => {
        server.close((err) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }

          app.database.close(() => {
            console.info("Database connection closed!");
            process.exit(0);
          });
        });
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
