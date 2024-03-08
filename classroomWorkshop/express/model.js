let mongoose = require('mongoose')
const Schema = mongoose.Schema;

var profileSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

module.exports = { profileSchema: profileSchema };