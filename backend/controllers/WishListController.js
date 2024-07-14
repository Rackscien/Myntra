const WishListData=require('../models/WishListModel')

module.exports.getWishListData= async(req,res)=>{
    // const theme = req.params.theme;
    const {userEmail} =req.body;
    const data = await WishListData.find({userEmail})
    res.send(data)

}

module.exports.addWishListData= async(req,res)=>{
    const {name,img,price,mrp,discount,seller,userEmail} = req.body;
    
    WishListData
    .create({name,img,price,mrp,discount,seller,userEmail})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.deleteWishListData = async (req,res) => {
    const {_id}= req.body;
    WishListData.findByIdAndDelete(_id).
    then(()=>res.send("Deleted Successfully")).catch((err)=>{console.log(err)})
}