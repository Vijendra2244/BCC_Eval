const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  biography: { type: String },

  name: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
  },
  nationality: {
    type: String,
  },
});

const Author = mongoose.modelNames("Author", authorSchema);

modul.exports = { Author };
