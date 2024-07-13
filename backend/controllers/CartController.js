const CartData=require('../models/CartModel')

module.exports.getCartData= async(req,res)=>{
    // const theme = req.params.theme;
    const data = await CartData.find()
    res.send(data)

}

module.exports.addCartData= async(req,res)=>{
    const {name,img,price,mrp,discount,seller} = req.body;
    
    CartData
    .create({name,img,price,mrp,discount,seller})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.deleteCartData = async (req,res) => {
    const {_id } = req.body;
    CartData
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}