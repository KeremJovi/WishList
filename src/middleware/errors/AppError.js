class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message, statusCode);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
