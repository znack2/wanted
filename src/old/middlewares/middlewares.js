/**
 * Configuration of the server middlewares.
 */


import expressWinston             from 'express-winston';
import methodOverride             from 'method-override';
import helmet                     from 'helmet';
import expressStatusMonitor       from 'express-status-monitor';

const isTest = process.env.NODE_ENV === 'test';
const isDev = process.env.NODE_ENV === 'development';

export default app => {
  app.use(helmet());
  app.use(expressStatusMonitor());
  app.use(methodOverride());
  if (isDev && !isTest) {
    app.use(morgan('dev'));
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(
      expressWinston.logger({
        winstonInstance,
        meta: true,
        msg:
          'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true,
      }),
    );
  }
};
