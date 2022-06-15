const express = require("express");

const JWT = require("../utils/jwt");
const {
    insertData,
    deleteData,
    tokenOnlyBody,
} = require("../utils/yupSchemas");
const InvalidBodyResponse = require("../utils/Response/InvalidBodyResponse");
const InvalidCredentialsResponse = require("../utils/Response/InvalidCredentialsResponse");
const InternalServerError = require("../utils/Response/InternalServerError");
const SuccessResponse = require("../utils/Response/SuccessResponse");
const User = require("../schemas/User");

const router = express.Router();

// ! GET Route for user
router.get("/", async (req, res, next) => {
    const schemaIsValid = await tokenOnlyBody.isValid(req.query);

    // Return an error if the schema is not valid
    if (!schemaIsValid) {
        return next(new InvalidBodyResponse());
    }

    const { token } = req.query;

    let tokenData;

    try {
        tokenData = JWT.verify(token);
    } catch (error) {
        return next(new InvalidCredentialsResponse());
    }

    const { _id } = tokenData;

    // Get the user from the database
    User.findById(_id, (err, user) => {
        if (err) {
            return next(
                new InternalServerError("Error connecting to database")
            );
        }

        // Return an error if the user does not exist
        if (!user) {
            return next(new InvalidCredentialsResponse());
        }

        const dataToSend = {
            _id: user._id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
        };

        return next(new SuccessResponse(dataToSend));
    });
});

module.exports = router;
