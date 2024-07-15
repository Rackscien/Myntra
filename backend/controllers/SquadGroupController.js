

const SquadGroup = require('../models/SquadGroupModel');

module.exports.getGroup = async (req,res)=>{
    
    const content = await SquadGroup.find()
    res.send(content)
}

module.exports.saveGroup = async (req,res) => {
    const {Fashion} = req.body;
    // const content =await BattleThemesModel.find({theme:theme});
    // if(content===undefined){
    
    // }
    SquadGroup
    .create({Fashion})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
    
}


// module.exports.deleteTheme = async (req,res) => {
//     const {_id } = req.body;
//     BattleThemesModel
//     .findByIdAndDelete(_id)
//     .then(()=> res.send("Deleted Successfully...."))
//     .catch((err)=> console.log(err))
// }
