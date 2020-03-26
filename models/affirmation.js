const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const affirmationSchema = new Schema({

goal: { type: String, required: false },
intention: { type: String, required: false },
affirmation: { type: String, required: false },
userId: { type: String}

});
const Affirmation = mongoose.model("affirmation", affirmationSchema);
module.exports = Affirmation;