const { responseStatus } = require('../constant/app.constant')
const resBody = {
    // success is default
    status: responseStatus.SUCCESS,
    data: '',
    message: ''
}

const errorResBody = {
    // success is default
    status: responseStatus.ERROR,
    data: '',
    message: ''
}
module.exports = {
    resBody,
    errorResBody
};