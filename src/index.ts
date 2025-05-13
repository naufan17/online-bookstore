import express, { Express, Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import compress from 'compression';
import YAML from 'yamljs';
import morgan from 'morgan';
import config from '../config/config';
import limiter from '../config/ratelimit';
import cors from '../config/cors';

const openApiDocument = YAML.load('./docs/openapi.yaml');
const app: Express = express();
const port: number = Number(config.Port);
const host: string = config.DBHost
const environment: string = config.NodeEnv
const stream = {
  write: (message: string) => {
    console.info(message.trim());
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
  res.status(HTTP_STATUS.OK).json({
    statusCode: HTTP_STATUS.OK,
    message: 'Hello World'
  })
})

app.use((req: Request, res: Response) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    statusCode: HTTP_STATUS.NOT_FOUND,
    message: 'Route not found'
  })
})

app.use((err: Error, req: Request, res: Response) => {
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: err.message
  })
})

console.log(`[server] Server is running on environment: ${environment}`);

app.listen(port, () => {
  console.log(`[server] Server is running on http://${host}:${port}`);
});