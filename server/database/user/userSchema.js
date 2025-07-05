const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userData');
const userSchema = mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        per_res:{
            type:String
        },
        date_created: {
            type: Date,
            default: Date.now,
        }
    })
module.exports = mongoose.model('User',userSchema);