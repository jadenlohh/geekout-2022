const Response = require("./Response");

class LoginResponse extends Response {
    constructor(data) {
        super(200, true, data);
    }
}

module.exports = LoginResponse;
