import ForbiddenError from '../errorHandlers/ForbiddenError';
module.exports = (req, res, next) => {
    if(req.user.isBanned){
        return next(new ForbiddenError("User banned"));
    }
    next();
};
