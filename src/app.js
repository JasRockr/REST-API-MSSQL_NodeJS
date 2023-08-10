import express from "express";
import config from "./config";

import asesoresRoutes from "./routes/asesores.routes.js";

const app = express();

//Settings
app.set("port", config.port);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(asesoresRoutes);

export default app;
