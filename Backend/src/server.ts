import { Server } from "http";
import app from "./app";
import config from "./common/config";

async function bootstrap() {
  const server: Server = app.listen(config.port, () => {
    console.log("server is running or port", config.port);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log("Server closed");
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);
}

bootstrap();
