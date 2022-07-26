import express from 'express';

import routes from './routes';

import './database';
import AppError from './AppError';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use((err, req, res, next) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
