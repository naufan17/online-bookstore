import config from './config/config';
import app from './app';

const port: number = Number(config.Port);
const host: string = config.Host
const environment: string = config.NodeEnv

console.log(`[server] Server is running on environment: ${environment}`);

app.listen(port, () => {
  console.log(`[server] Server is running on http://${host}:${port}`);
});