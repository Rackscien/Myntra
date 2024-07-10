

const BattleThemesModel = require('../models/BattleThemesModel');

module.exports.getTheme = async (req,res)=>{
    
    const content = await BattleThemesModel.find()
    res.send(content)
}

module.exports.saveTheme = async (req,res) => {
    const {theme} = req.body;
    // const content =await BattleThemesModel.find({theme:theme});
    // if(content===undefined){
    
    // }
    BattleThemesModel
    .create({theme})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
    
}


module.exports.deleteTheme = async (req,res) => {
    const {_id } = req.body;
    BattleThemesModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}
