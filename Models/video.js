<<<<<<< HEAD
const mongoose = require('mongoose');
const VideoSchema = new mongoose.Schema({
    video_title : String,
    video_uri : String,
    course_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    },
    description : String
})

=======
const mongoose = require('mongoose');
const VideoSchema = new mongoose.Schema({
    video_title : String,
    video_uri : String,
    course_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    },
    description : String
})

>>>>>>> 319d4e9268501efd489f306f2b58ca2efe21fa44
module.exports = mongoose.model('Video', VideoSchema )