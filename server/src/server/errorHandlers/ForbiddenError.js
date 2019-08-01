const ApplicationError = require('./ApplicationError');

class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message || 'Forbidden Error', 403);
    }
}
module.exports = ForbiddenError;
