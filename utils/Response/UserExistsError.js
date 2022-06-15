const { Conflict } = require("http-errors");

class UserExistsError extends Conflict {
    constructor() {
        super({ success: false, data: { error: "User Already Exists!" } });
    }
}

module.exports = UserExistsError;
