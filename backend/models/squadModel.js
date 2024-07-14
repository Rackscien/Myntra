const mongoose = require('mongoose')

const squadSchema = new mongoose.Schema({
   
    userName :{
        type:String,
        require: true,
    },
    content :{
        type:String,
        require:true,
    },
    userEmail:{
        type:String,
        require: true,
    }
   

});

module.exports = mongoose.model('squad', squadSchema);