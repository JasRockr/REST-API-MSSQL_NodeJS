import { config } from "dotenv";
config();

export default {
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASS || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_NAME || "",
  dbPort: process.env.DB_PORT || "",
};
