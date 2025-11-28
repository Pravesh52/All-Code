const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Upload"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text: {
    type: String,
    required: true
  },
   createdAt: { type: Date, default: Date.now }  // optional but good
});

let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
