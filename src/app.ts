import express, { Express, Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import compress from 'compression';
import YAML from 'yamljs';
import morgan from 'morgan';
import limiter from './configs/ratelimit';
import cors from './configs/cors';
import logger from './configs/logger';

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
  express.json(),
  express.urlencoded({ extended: true }),
  morgan('combined', { stream }),
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.use((req: Request, res: Response) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    statusCode: HTTP_STATUS.NOT_FOUND,
    message: 'Resource not found'
  })
})

app.use((err: Error, req: Request, res: Response) => {
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: err.message
  })
})

export default app;