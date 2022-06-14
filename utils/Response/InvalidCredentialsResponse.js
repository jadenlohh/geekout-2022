const Response = require("./Response");

class InvalidCredentialsResponse extends Response {
    constructor(data) {
        super(401, false, data);
    }
}

module.exports = InvalidCredentialsResponse;
