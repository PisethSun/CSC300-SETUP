const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    username: {
     type: String,
      required: true
   },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    commentContent: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  }, 
  { collection: "comments" }
);

module.exports = mongoose.model('comments', commentsSchema);