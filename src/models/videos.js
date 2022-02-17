const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Video = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  isPrivate: { type: Boolean, required: true, default: false },
  timesViewed: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Videos", Video);