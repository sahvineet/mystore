const route = require('express').Router();
const { resBody, errorResBody } = require('../utils/res-body');

const { productRoleMiddleWare } = require('../middleware/role.middleware');

route.get('/', productRoleMiddleWare, (req, res) => {
    resBody.message = 'Product sent successfully';
    res.status(200).json(resBody);
});

route.post('/', productRoleMiddleWare, (req, res) => {
    resBody.message = 'Product added successfully';
    res.status(201).json(resBody);
});

route.put('/', productRoleMiddleWare, (req, res) => {
    resBody.message = 'Product updated successfully';
    res.status(200).json(resBody);
});

route.delete('/', productRoleMiddleWare, (req, res) => {
    resBody.message = 'Product deleted successfully';
    res.status(200).json(resBody);
});


module.exports = route;