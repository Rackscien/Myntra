const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
   
    userName :{
        type:String,
        require: true,
    },
    content :{
        type:String,
        require:true,
    },
   

});

module.exports = mongoose.model('diary', diarySchema);