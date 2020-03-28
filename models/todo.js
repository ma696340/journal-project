const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const toDoSchema = new Schema({

  ToDo: { type: String, required: true },
  userId: { type: String},
 
});
const ToDo = mongoose.model("ToDo", toDoSchema);
module.exports = ToDo;