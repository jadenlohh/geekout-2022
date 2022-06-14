const Response = require("./Response");

class InvalidCredentialsResponse extends Response {
    constructor(data) {
        super(400, false, data);
    }
}

module.exports = InvalidCredentialsResponse;
