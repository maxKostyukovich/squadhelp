const ApplicationError = require('./ApplicationError');

class InvalidCredentialsError extends ApplicationError {
  constructor(message) {
    super(message || 'Invalid credentials', 400);
  }
}
module.exports = InvalidCredentialsError;
