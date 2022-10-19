const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(request, response, next) {
    const token = request.header('x-auth-token');
    if(!token){
        return response.status(401).json({
            message: "Unauthorized, access denied!"
        });
    }
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        request.user = decoded.user;
    }
    catch(err){
        return response.status(401).json({
            message: err.message
        });
    }
    next();
}