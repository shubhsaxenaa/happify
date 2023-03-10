const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const interestSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    interestName: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
      enum: ["Leisure", "Productive", "Learning"],
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Interest", interestSchema);
