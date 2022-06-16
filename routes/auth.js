const express = require("express");
const bcrypt = require("bcrypt");

const JWT = require("../utils/jwt");
const { loginSchema, registerSchema } = require("../utils/yupSchemas");
const InvalidBodyResponse = require("../utils/Response/InvalidBodyResponse");
const InvalidCredentialsResponse = require("../utils/Response/InvalidCredentialsResponse");
const UserExistsError = require("../utils/Response/UserExistsError");
const SuccessResponse = require("../utils/Response/SuccessResponse");
const InternalServerError = require("../utils/Response/InternalServerError");
const User = require("../schemas/User");

const router = express.Router();

// ! POST Route for /auth/register
router.post("/login", async (req, res, next) => {
    const schemaIsValid = await loginSchema.isValid(req.body);

    // Return an error if the schema is not valid
    if (!schemaIsValid) {
        return next(new InvalidBodyResponse());
    }

    const { email, password } = req.body;

    // Find one user
    User.findOne({ email }, (err, person) => {
        if (err) {
            return next(new InternalServerError(err));
        }

        // If no results
        if (!person) {
            return next(new InvalidCredentialsResponse());
        }

        const { password: db_password, _id } = person;
        var checkPwd = bcrypt.compareSync(password, db_password);

        if (!checkPwd) {
            // If password is valid, return the user the JWT token
            return next(new InvalidCredentialsResponse());
        }

        const token = JWT.sign({ _id });
        return next(new SuccessResponse({ token }));
    });
});

router.post("/register", async (req, res, next) => {
    const isSchemaValid = await registerSchema.isValid(req.body);
    if (!isSchemaValid) {
        return next(new InvalidBodyResponse());
    }

    const { email, password, name, age, gender } = req.body;

    var hash = bcrypt.hashSync(password, 10);
    var newUser = new User({ name, email, password: hash, age, gender });

    newUser.save((err, result) => {
        if (err && Object.prototype.hasOwnProperty.call(err, "errors")) {
            console.log(err);
            const errorMessage = Object.keys(err.errors)
                .map((key) => err.errors[key].message)
                .join(". ");

            return next(new InternalServerError(errorMessage));
        }

        if (err && err.code === 11000) {
            return next(new UserExistsError());
        }

        if (err) {
            return next(new InternalServerError("Something went wrong"));
        }

        console.log(result);

        return next(new SuccessResponse(result));
    });
});

module.exports = router;
