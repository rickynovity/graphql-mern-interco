import colors from "colors";
import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import mongoose from "mongoose";

import typeDefs from "./graphql/typeDefs/index.js";
import resolvers from "./graphql/resolvers/index.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

const initDb = async (mongoUrl) => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(
      `❌ Error connecting to MongoDB: ${error.message}`.red.underline.bold
    );
    process.exit(1);
  }
};

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port }, resolve));
await initDb(process.env.MONGO_DB_URL);

console.log(`
  🚀  Server is running : http://localhost:${port}
  🔉  Listening on port ${port}
`);
