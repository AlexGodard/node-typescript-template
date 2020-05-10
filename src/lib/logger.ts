import { createLogger, format, transports } from 'winston';
import { compact } from 'lodash';
import { LOGGER_LEVEL } from '../config';

const { combine, timestamp, printf, label, prettyPrint, colorize } = format;

const myFormat = printf((info): string => {
  const metadata = compact([info.timestamp, info.level, info.label]);

  /* istanbul ignore next */
  if (info.error) {
    return `[${metadata.join(' ')}] ${info.message}\n${JSON.stringify(
      info.error,
      undefined,
      2
    )}\nStack ${info.error.stack}`;
  }
  return `[${metadata.join(' ')}] ${info.message}`;
});

export const logger = createLogger({
  level: LOGGER_LEVEL,
  format: combine(
    colorize(),
    label({ label: process.env.APP_NAME }),
    timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
    prettyPrint()
  ),
  // One and only one transport: Logs should be treated as stdout/stderr event streams.
  transports: [
    new transports.Console({
      format: combine(myFormat),
    }),
  ],
});
