const { Unauthorized } = require("http-errors");

class InvalidCredentialsResponse extends Unauthorized {
    constructor() {
        super({ success: false, data: { error: "Invalid credentials" } });
    }
}

module.exports = InvalidCredentialsResponse;
