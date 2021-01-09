import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from '@shared/errors/AppErrors';

import routes from './routes';

const app = express();

// Allow express to recognize json requests
app.use(express.json());

// Enable outside web request to api (cors)
app.use((req, res, next) => {
  next();
}, cors());

// Express routes and
app.use(routes);

// Global Handling Application Error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  // eslint-disable-next-line no-console
  console.error(err);
  return res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started');
});
