const route = require('express').Router();
const { signupCtrl, loginCtrl } = require('../controllers/user.controller');
const { resBody, errorResBody } = require('../utils/res-body');


route.post('/signup', (req, res) => {
    console.log('body', req.body);
    signupCtrl(req.body)
        .then(data => {
            console.log('data', data)
            resBody.data = data;
            res.status(200).json(resBody);
        })
        .catch(err => {
            console.log(err);
            errorResBody.message = err.message;
            res.status(500).json(errorResBody)
        })
});

route.post('/login', (req, res) => {
    console.log('body', req.body);
    loginCtrl(req.body)
        .then(resData => {
            if (resData.length === 0) {
                resBody.data = 'Invalid username or password.';
                res.status(401).json(resBody);
            }else {
                // genereate JWT
                resBody.data = 'Welcome to MyStore';
                res.status(200).json(resBody);
            }
        })
        .catch(err => {
            console.log(err);
            errorResBody.message = err.message;
            res.status(500).json(errorResBody)
        })
});



module.exports = route;