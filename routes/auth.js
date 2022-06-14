const express = require("express");
const { MongoClient, ServerApiVersion, MongoServerError } = require("mongodb");
const bcrypt = require("bcrypt");

const JWT = require("../utils/jwt");
const { loginSchema } = require("../utils/yupSchemas");
const InvalidBodyResponse = require("../utils/Response/InvalidBodyResponse");
const InvalidCredentialsResponse = require("../utils/Response/InvalidCredentialsResponse");
const LoginResponse = require("../utils/Response/LoginResponse");

const router = express.Router();
const uri =
    "mongodb+srv://Admin:lAf8JiPQynG0mCGm@cluster0.vobnv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// ! POST Route for /auth/register
router.post("/login", async (req, res) => {
    const schemaIsValid = await loginSchema.isValid(req.body);

    // Return an error if the schema is not valid
    if (!schemaIsValid) {
        return res.status(400).send(new InvalidBodyResponse("Invalid body"));
    }

    const { email, password } = req.body;

    client.connect((err) => {
        const collection = client.db("geekout-2022").collection("credentials");

        collection.findOne({ _id: email }, (err, result) => {
            if (err) throw err;

            var checkPwd = bcrypt.compareSync(password, result.pwd);
            const token = JWT.sign({ _id: result._id });

            if (checkPwd) {
                // If password is valid, return the user the JWT token
                return res.send(new LoginResponse({ token }));
            } else {
                // If password is invalid, return a 401 error
                return res
                    .status(401)
                    .send(
                        new InvalidCredentialsResponse("Invalid credentials")
                    );
            }
        });
    });
});

router.get("/register", (req, res) => {
    res.send("This is the register page");

    client.connect((err) => {
        const collection = client.db("geekout-2022").collection("credentials");

        var hash = bcrypt.hashSync("Password123", 10);
        var testData = { _id: "test@gmail.com", pwd: hash };

        collection.insertOne(testData, (err, result) => {
            if (MongoServerError && err.message.indexOf("11000")) {
                console.log("Email already exist!");
            }
        });
    });
});

module.exports = router;
