import { config } from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

config();
const app = express();

// importing this will establish the connection immediately.
import connection from "./db.js";

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

if (connection) {
    const port = parseInt(process.env.PORT) || 8080;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
} else {
    console.error("Could not establish database connection.");
}
