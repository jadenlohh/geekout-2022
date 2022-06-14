const Response = require("./Response");

class InvalidBodyResponse extends Response {
    constructor(data) {
        super(400, false, data);
    }
}

module.exports = InvalidBodyResponse;
