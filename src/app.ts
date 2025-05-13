import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import compress from "compression";
import YAML from "yamljs";
import morgan from "morgan";
import { responseInternalServerError, responseNotFound } from "./helpers/response.helper";
import passport from "./config/passport";
import limiter from "./config/ratelimit";
import cors from "./config/cors";
import logger from "./config/logger";
import api from "./routes";

const openApiDocument = YAML.load('./docs/openapi.yaml');
const app: Express = express();
const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  }
}

app.use(
  limiter,
  cors,
  helmet(),
  compress(),
  passport.initialize(),
  express.json(),
  express.urlencoded({ extended: true }),
  morgan('combined', { stream }),
)

app.use('/api', api);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.use((req: Request, res: Response) => {
  return responseNotFound(res, 'Resource not found');
})

app.use((err: Error, req: Request, res: Response) => {
  return responseInternalServerError(res, err.message);
})

export default app;