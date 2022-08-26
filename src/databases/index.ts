import { logger } from '@/utils/logger';
import { DB_URL, NODE_ENV } from '@config';
import { connect, connection, set } from 'mongoose';

const dbConnection = {
  url: DB_URL,
};

export const connectToDatabase = () => {
  logger.info('Connecting to Database..');
  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  connect(dbConnection.url);
  connection.on('error', e => {
    logger.error(e);
  });
  connection.on('open', e => {
    logger.info('MongoDb Connected');
  });
};
