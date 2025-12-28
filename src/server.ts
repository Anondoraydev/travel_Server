import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tourmangemet:ymIww6NE1vLYi7iF@cluster0.gbp43.mongodb.net/TourManagement?appName=Cluster0"
    );
    console.log("Connected to MongoDB");
    server = app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("SIGTERM", () => {
  console.log("SIGTERM detected....Shutting down the server...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("SIGINT detected....Shutting down the server...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.log(
    "Unhandled Rejection detected....Shutting down the server...",
    err
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(
    " Uncaught Exception detected....Shutting down the server...",
    err
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// Promise.reject(new Error("I forgot to catch this promise"));
// throw new Error("Something went wrong");
