const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const HearingData = new Schema({
    score: {
        type: Number,
        required: true,
    },
    user: {
        type: ObjectId,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("HearingData", HearingData);
