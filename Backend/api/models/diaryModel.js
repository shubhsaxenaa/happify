const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const diarySchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    mood: { type: Number, required: true },
    diaryBody: { type: String },
    isFavorite: { type: Boolean, default: false },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Diary", diarySchema);
