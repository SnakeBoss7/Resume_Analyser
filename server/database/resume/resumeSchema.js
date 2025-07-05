const mongoose = require('mongoose');
const userSchema = require('../user/userSchema');
const User = require('../user/userSchema');

mongoose.connect('http://localhost:27017/resumeData');

const resSchema = mongoose.Schema(
    {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        resume_content: {
            type: String,
        },
        analysis_results: {
            type: mongoose.Schema.Types.Mixed,
        },
        date_created: {
            type: Date,
            default: Date.now,
        },
    })
module.exports = mongoose.model('Resume', resSchema);