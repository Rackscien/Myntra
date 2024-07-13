const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
   
    name :{
        type:String,
        require: true,
    },
    img :{
        type:String,
        require:true,
    },
    price:{
        type: Number,
        require: true,
    },
    mrp:{
        type:Number,
        require: true,
    },
    
    discount:{
        type:Number,
        require: true,
    },
    seller :{
        type:String,
        require:true,
    },
   

});

module.exports = mongoose.model('cart', CardSchema);