// We are using NotFound as a baseline because HttpError is an interface
const { NotFound } = require("http-errors");

class SuccessResponse extends NotFound {
    constructor(data) {
        super({ success: true, data });
        this.status = 200;
    }
}

module.exports = SuccessResponse;
