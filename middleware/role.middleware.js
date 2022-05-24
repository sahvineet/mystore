const { ROLES_OBJECT } = require('../constant/app.constant');
const productRoleMiddleWare = (req, res, next) => {

    console.log(req.body);
    console.log(req.method);
    // we can get payload from token(jwt)
    let payload = {};
    payload = (req.body && req.body.payload) ? req.body.payload : {};

    if ((payload.role === ROLES_OBJECT.CUSTOMER || payload.role === ROLES_OBJECT.CUSTOMER)
        && req.method === 'DELETE') 
    {
        next({statusCode: 401, message: 'Invalide access'});
    } else if (
        (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH')
        && (payload.role === ROLES_OBJECT.SUPPORTER) 
    ) {
        next({statusCode: 401, message: 'Invalide access'});
    } else {
        next();
    }
}

module.exports = {
    productRoleMiddleWare
}