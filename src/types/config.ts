export interface Config {
  NodeEnv: string;
  Port: string;
  DBHost: string;
  DBPort: string;
  DBUser: string;
  DBPassword: string;
  DBName: string;
  JWTSecret: string;
  JWTExpiresIn: string;
  CorsOrigin: string;
  RateLimitMax: string;
  RateLimitWindowMs: string;
}