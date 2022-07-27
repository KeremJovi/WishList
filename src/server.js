import app from './app';
import 'express-async-errors';
import AppError from './middleware/errors/AppError';
app.listen(3333);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message,
    });
  }
  next(error);
});
