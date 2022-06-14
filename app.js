const express = require("express");
const authRoute = require("./routes/auth");
const dataRoute = require("./routes/data");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/data", dataRoute);

app.get("/", (req, res) => {
    res.send("This is the home page");
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
