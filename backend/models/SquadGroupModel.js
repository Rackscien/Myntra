const mongoose = require('mongoose')
const SquadGroupSchema = new mongoose.Schema({
    
    Fashion :{
        type:String,
        require:true,
    },
    
});

module.exports = mongoose.model('SquadGroup', SquadGroupSchema);