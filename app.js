const express = require("express");
const authRoute = require("./routes/auth");
const dataRoute = require("./routes/data");
const cors = require("cors");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/data", dataRoute);

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

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!`);
});
