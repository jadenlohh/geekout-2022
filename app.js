const express = require("express");
const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.send("This is the home page");
});

app.get("/info", (req, res) => {
    res.send("This is the info page");
});

app.get("/test", (req, res) => {
    res.send("This is the test page");
});

app.listen(process.env.PORT, () => {
    console.log(`App started on port ${process.env.PORT}!`);
});
