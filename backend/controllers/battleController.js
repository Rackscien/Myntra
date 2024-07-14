
const BattleMOdel = require('../models/BattleModel')

module.exports.getContent = async (req,res)=>{
    // const {theme} = req.body;

    // console.log(theme);
    BattleMOdel.find()
    .then((data)=> res.send(data))
    .catch((err)=> console.log(err))
    // console.log(content)
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
    BattleMOdel.findById(id)
    .then((data)=> res.send(data))
    .catch((err)=> console.log(err))
}
module.exports.deleteContent = async (req,res) => {
    const {_id } = req.body;
    BattleMOdel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.updateVote = async (req,res)=>{
    const id= req.params.id;
    const {vote} = req.body;
    // res.send({id,vote});
    BattleMOdel
    .findByIdAndUpdate(id,{vote})
    .then((data)=>{
        console.log(data);
        res.send("Updated Successfully....");
    })
    .catch((err)=> console.log(err))
}