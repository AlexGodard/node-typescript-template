import { config } from 'dotenv';

config();

const environmentVariables = [
  'NODE_ENV',
  'LOGGER_LEVEL',
  'REDIS_URL',
];

for (const environmentVariable of environmentVariables) {
  if (
    !process.env[environmentVariable] &&
    process.env[environmentVariable] !== ''
  ) {
    throw new Error(
      `The app requires the \`${environmentVariable}\` environment variable to be set`
    );
  }
}

export const NODE_ENV = process.env.NODE_ENV as string;
export const LOGGER_LEVEL = process.env.LOGGER_LEVEL as string;
