const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true,
      unique: true,
      
    },
    password: { type: String, required: true },
    username: { type: String, required: true },
    gender: { type: String },
    occupation: { type: String, required: true },
    dateOfBirth: { type: String},
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("User", userSchema);
