import { createLogger, format, transports } from 'winston';
import { LOGGER_LEVEL } from '../config';

export const logger = createLogger({
  level: LOGGER_LEVEL,
  defaultMeta: { service: process.env.npm_package_name },
  format: format.json(),
  // One and only one transport: Logs should be treated as stdout/stderr event streams.
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
