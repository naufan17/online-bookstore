import dotenv from "dotenv"
import { Config } from "../src/types/config"

dotenv.config({ path: ".env" })

const config: Config = {
  NodeEnv: process.env.NODE_ENV || "development",
  Port: process.env.PORT || "8000",
  DBHost: process.env.DB_HOST || "localhost",
  DBPort: process.env.DB_PORT || "5433",
  DBUser: process.env.DB_USER || "postgres",
  DBPassword: process.env.DB_PASSWORD || "postgres",
  DBName: process.env.DB_NAME || "online_bookstore",
  JWTSecret: process.env.JWT_SECRET || "secret",
  JWTExpiresIn: process.env.JWT_EXPIRES_IN || "3600000",
  CorsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
  RateLimitMax: process.env.RATE_LIMIT_MAX || "100",
  RateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS || "3600000",
}

export default config