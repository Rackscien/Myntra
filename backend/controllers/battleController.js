
const BattleMOdel = require('../models/BattleModel')

module.exports.getContent = async (req,res)=>{
    const theme = req.params.theme;
    console.log(theme);
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
module.exports.getContentId = async (req,res)=>{
    const id = req.params.id;
    const content = await getcontentbyId(id);
    res.send(content)
}
module.exports.deleteContent = async (req,res) => {
    const {_id } = req.body;
    BattleMOdel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.updateVote = async (req,res)=>{
    const {id}= req.params.id;
    const {vote} = req.body;
    BattleMOdel
    .findByIdAndUpdate(id,{vote})
    .then(()=>{
        const battle = require('../models/BattleModel');
        battle.findById(id).then((data)=> res.send(data))
        .catch((err)=> console.log(err))
    })
    .catch((err)=> console.log(err))

}