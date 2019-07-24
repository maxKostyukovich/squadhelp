const ApplicationError = require('./ApplicationError');

class InvalidCredentialsError extends ApplicationError {
  constructor(message) {
    super(message || 'Invalid credentials', 401);
  }
}
module.exports = InvalidCredentialsError;
