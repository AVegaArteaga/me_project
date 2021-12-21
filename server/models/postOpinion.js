import mongoose from 'mongoose';

const postOpinion = mongoose.Schema({

    message: String,
    creator: String,

    opinionNum: Number,
    
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postOpinion);

export default PostMessage;