class Response {
    constructor(statusCode, success, data) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = success;
    }
}

module.exports = Response;
