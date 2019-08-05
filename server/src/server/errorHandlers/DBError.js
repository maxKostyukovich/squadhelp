const ApplicationError = require('./ApplicationError');

class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message || 'DB Error', 400);
    }
}
module.exports = ForbiddenError;
