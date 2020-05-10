import { config } from 'dotenv';

config();

const environmentVariables = ['NODE_ENV', 'LOGGER_LEVEL', 'APP_NAME'];

environmentVariables.forEach((environmentVariable): void => {
  /* istanbul ignore next */
  if (
    !process.env[environmentVariable] &&
    process.env[environmentVariable] !== ''
  ) {
    throw new Error(
      `The app requires the \`${environmentVariable}\` environment variable to be set`
    );
  }
});

export const NODE_ENV = process.env.NODE_ENV as string;
export const LOGGER_LEVEL = process.env.LOGGER_LEVEL as string;
export const APP_NAME = process.env.APP_NAME as string;
