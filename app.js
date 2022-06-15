const express = require("express");
const authRoute = require("./routes/auth");
const dataRoute = require("./routes/data");
const userRoute = require("./routes/user");
const cors = require("cors");
const os = require("os");
const createError = require("http-errors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/data", dataRoute);
app.use("/user", userRoute);

const uri = "mongodb://root:root@localhost:27017";

mongoose.connect(uri);

app.get("/", (req, res) => {
    const hostname = os.hostname();
    res.send({
        success: true,
        container: hostname,
    });
});

app.get("/info", (req, res) => {
    res.send("This is the info page");
});

app.get("/test", (req, res) => {
    res.send("This is the test page");
});

app.get("/error", (req, res, next) => {
    return next(createError(500, "This is the error page"));
});

// ! Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!`);
});
