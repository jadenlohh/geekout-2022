const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const JWT = require("../utils/jwt");
const { getData, insertData } = require("../utils/yupSchemas");
const InvalidBodyResponse = require("../utils/Response/InvalidBodyResponse");

const router = express.Router();
const uri =
    "mongodb+srv://Admin:lAf8JiPQynG0mCGm@cluster0.vobnv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// ! GET Route for data
router.get("/", async (req, res) => {
    const schemaIsValid = await getData.isValid(req.query);

    // Return an error if the schema is not valid
    if (!schemaIsValid) {
        return res.status(400).send(new InvalidBodyResponse("Invalid body"));
    }

    const { token } = req.query;

    client.connect(async (err) => {
        if (err) {
            console.log(err);
            return res
                .status(500)
                .send("Internal Server Error: Client connection error");
        }

        const { _id } = JWT.verify(token);

        const collection = client.db("geekout-2022").collection("hearing_data");
        const results = await collection.find({ user: _id }).toArray();
        return res.json(results);
    });
});

router.post("/", async (req, res) => {
    const isSchemaValid = await insertData.isValid(req.body);

    if (!isSchemaValid) {
        return res.status(400).send(new InvalidBodyResponse("Invalid body"));
    }

    const { token, score } = req.body;

    client.connect((err) => {
        const collection = client.db("geekout-2022").collection("hearing_data");

        // Get the data from the token
        const data = JWT.verify(token);

        const { _id } = data;

        var testData = {
            user: _id,
            score: parseInt(score),
            created_at: new Date().toISOString(),
        };

        collection.insertOne(testData, (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result) {
                return res.status(204).json({
                    success: true,
                });
            }
            console.log(result);
        });
    });
});

module.exports = router;
