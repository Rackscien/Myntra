const mongoose = require('mongoose')
const DocumentarySchema = new mongoose.Schema({
    
    youtube_id :{
        type:String,
        require:true,
    },
    url:{
        type:String,
        require:true,
    },
    Context:{
        type:String,
        require:true,
    },
    hashtags:{
        type:String,
        require:true,
    }
    
});

module.exports = mongoose.model('documentary', DocumentarySchema);