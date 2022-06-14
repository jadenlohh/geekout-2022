const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "ooo_im_a_secret!";

const JWT = {
    sign: (payload) => {
        return jwt.sign(payload, secret);
    },

    verify: (token) => {
        return jwt.verify(token, secret);
    },
};

module.exports = JWT;
