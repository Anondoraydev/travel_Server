import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production" | "test";
}

const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVars: string[] = ["DB_URL", "PORT", "NODE_ENV"];

  requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is not set.`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL as string,
    NODE_ENV: process.env.NODE_ENV as "development" | "production" | "test",
  };
};

export const envVars = loadEnvVariables();
