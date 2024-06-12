<<<<<<< HEAD

const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    review_content : String
})

=======

const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    review_content : String
})

>>>>>>> 319d4e9268501efd489f306f2b58ca2efe21fa44
module.exports = mongoose.model('Review' , ReviewSchema)