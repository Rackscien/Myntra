const diarySchema=require('../models//DiaryModel')

module.exports.getDiaryData= async(req,res)=>{
    // const theme = req.params.theme;
    
    const {userName} = req.body;
    // console.log(userName)
    const data = await diarySchema.find({});
    res.send(data)

}

module.exports.addDiaryData= async(req,res)=>{
    const {userName,content} = req.body;
    // console.log(`${userName}`)
    diarySchema
    .create({userName,content})
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