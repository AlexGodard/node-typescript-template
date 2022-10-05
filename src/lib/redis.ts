import { createClient } from 'redis';
import { logger } from './logger';

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on('error', (error) => logger.error('Redis Client Error', error));

await client.connect();
