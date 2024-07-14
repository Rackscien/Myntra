const WishListData=require('../models/WishListModel')

module.exports.getWishListData= async(req,res)=>{
    // const theme = req.params.theme;
    const data = await WishListData.find()
    res.send(data)

}

module.exports.addWishListData= async(req,res)=>{
    const {name,img,price,mrp,discount,seller,userName} = req.body;
    
    WishListData
    .create({name,img,price,mrp,discount,seller,userName})
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