// ******************************
process.on("uncaughtException", (err) => {
  console.log(`Error ${err}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

const app = require("./app");


const server = app.listen(process.env.PORT, () => {
  console.log("server connected " + process.env.PORT);
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down server for ${err}`);
  console.log(`shutting down server for unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
