const { InternalServerError: ISE } = require("http-errors");

class InternalServerError extends ISE {
    constructor(message) {
        super({ success: false, data: { error: message } });
    }
}

module.exports = InternalServerError;
