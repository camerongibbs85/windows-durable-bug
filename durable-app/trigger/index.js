const http = require('./http-promise')

const url = `http://localhost:7072/runtime/webhooks/durabletask/instances?code=dummy`;

module.exports = async function (context, req) {
    try {
        const response = await http(url);
        return response;
    } catch (err) {
        return err;
    }
}