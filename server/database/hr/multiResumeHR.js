const mongoose = require('mongoose');
const User = require('../user/userSchema');

mongoose.connect('http://localhost:27017/uploadBatch');

const uploadBatchSchema = new mongoose.Schema({
  hrId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  batchName: String,
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('uploadBatch', uploadBatchSchema);