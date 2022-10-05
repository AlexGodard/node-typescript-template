import * as AWS from 'aws-sdk';
import invariant from 'tiny-invariant';
import { logger } from './logger';

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  invariant(process.env.EMAIL_SOURCE, 'process.env.EMAIL_SOURCE is not set');
  const data = await ses
    .sendEmail({
      Message: {
        Body: {
          Html: {
            Charset: 'utf8',
            Data: html,
          },
          Text: {
            Charset: 'utf8',
            Data: html,
          },
        },
        Subject: {
          Charset: 'utf8',
          Data: subject,
        },
      },
      Destination: {
        ToAddresses: [to],
      },
      Source: process.env.EMAIL_SOURCE,
    })
    .promise();
  logger.info(`Email successfully sent to ${to} (${data.MessageId})`);
};
