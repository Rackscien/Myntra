const squadSchema=require('../models/squadModel')

module.exports.getSquadData= async(req,res)=>{
    // const theme = req.params.theme;
    const data = await squadSchema.find()
    res.send(data)

}

module.exports.addSqadData= async(req,res)=>{
    const {userName,content,userEmail} = req.body;
    
    squadSchema
    .create({userName,content,userEmail})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

// module.exports.deleteWishListData = async (req,res) => {
//     const {_id } = req.body;
//     WishListData
//     .findByIdAndDelete(_id)
//     .then(()=> res.send("Deleted Successfully...."))
//     .catch((err)=> console.log(err))
// }