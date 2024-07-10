
const BattleMOdel = require('../models/BattleModel')

module.exports.getContent = async (req,res)=>{
    const theme = req.params.theme;
    const content = await BattleMOdel.find({theme:theme})
    res.send(content)
}

module.exports.saveContent = async (req,res) => {
    const { image,theme,name,vote } = req.body;
    BattleMOdel
    .create({ image,theme,name,vote})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
    
}


module.exports.deleteContent = async (req,res) => {
    const {_id } = req.body;
    BattleMOdel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.updateVote = async (req,res)=>{
    const {_id}= req.body;
    BattleMOdel
    .findByIdAndUpdate(_id,{$inc:{vote:1}})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err)=> console.log(err))

}