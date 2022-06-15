const express = require("express");
const { ObjectId } = require("mongodb");

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
const HearingData = require("../schemas/HearingData");

const router = express.Router();

// ! GET Route for data
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

    console.log(tokenData);

    HearingData.find({ user_id: _id }, (err, data) => {
        if (err) {
            return next(
                new InternalServerError("Error connecting to database")
            );
        }

        return next(new SuccessResponse(data));
    });
});

// ! Endpoint for inserting data
router.post("/", async (req, res, next) => {
    const isSchemaValid = await insertData.isValid(req.body);

    if (!isSchemaValid) {
        return next(new InvalidBodyResponse());
    }

    const { token, score } = req.body;

    const collection = client.db("geekout-2022").collection("hearing_data");

    // Get the data from the token
    let tokenData;
    try {
        tokenData = JWT.verify(token);
    } catch (error) {
        return next(new InvalidCredentialsResponse());
    }

    const { _id } = tokenData;

    const hearingData = new HearingData({
        user: tokenData._id,
        score: parseInt(score),
    });

    hearingData.save((err, data) => {
        if (err) {
            return next(
                new InternalServerError("Error connecting to database")
            );
        }

        return next(new SuccessResponse(data));
    });
});

// ! Endpoint for deleting data
router.delete("/", async (req, res, next) => {
    const isSchemaValid = await deleteData.isValid(req.body);

    // Return an error if the schema is not valid
    if (!isSchemaValid) {
        return next(new InvalidBodyResponse());
    }

    const { token, _id } = req.body;

    let tokenData;

    try {
        tokenData = JWT.verify(token);
    } catch (error) {
        return next(new InvalidCredentialsResponse());
    }

    const { _id: userObjectId } = tokenData;

    let hearingDataObjectId;

    try {
        hearingDataObjectId = ObjectId(_id);
    } catch (error) {
        return next(new InvalidCredentialsResponse());
    }

    // Delete one
    HearingData.deleteOne(
        { _id: hearingDataObjectId, user: ObjectId(userObjectId) },
        (err, data) => {
            if (err) {
                return next(
                    new InternalServerError("Error connecting to database")
                );
            }

            return next(new SuccessResponse(data));
        }
    );
});

module.exports = router;
