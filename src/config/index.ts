import * as path from "path";
import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const configPath = path.resolve(
  __dirname,
  "env",
  `.env.${process.env.NODE_ENV}`
);

dotenv.config({ path: configPath });

console.info(`Running in ${process.env.NODE_ENV} environment.`);
