const { BadRequest } = require("http-errors");

class InvalidBodyResponse extends BadRequest {
    constructor() {
        super({ success: false, data: { error: "Invalid body" } });
    }
}

module.exports = InvalidBodyResponse;
