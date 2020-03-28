const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const affirmationSchema = new Schema({

Affirmation: { type: String, required: true },
userId: { type: String}

});
const Affirmation = mongoose.model("Affirmation", affirmationSchema);
module.exports = Affirmation;


