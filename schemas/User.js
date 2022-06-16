const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 16,
        max: 100,
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },

    password: {
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", User);
