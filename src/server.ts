
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tourmangemet:ymIww6NE1vLYi7iF@cluster0.gbp43.mongodb.net/TourManagement?appName=Cluster0"
    );
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
