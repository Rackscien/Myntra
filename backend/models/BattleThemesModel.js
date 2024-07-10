const mongoose = require('mongoose')
const BattleThemeSchema = new mongoose.Schema({
    
    theme :{
        type:String,
        require:true,
    },
    
});

module.exports = mongoose.model('battelTheme', BattleThemeSchema);