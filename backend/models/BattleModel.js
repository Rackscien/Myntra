const mongoose = require('mongoose')

const BattleSchema = new mongoose.Schema({
    image :{
        type:String,
        require: true,
    },
    theme :{
        type:String,
        require:true,
    },
    name:{
        type: String,
        require: true,
    },
    vote:{
        type:Number,
        require: true,
    }
});

module.exports = mongoose.model('battel', BattleSchema);