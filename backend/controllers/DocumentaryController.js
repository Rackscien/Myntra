const DocumatryModel=require('../models/DocumentaryModel')

module.exports.getDocumentary= async(req,res)=>{
    // const theme = req.params.theme;
    const documentary = await DocumatryModel.find()
    res.send(documentary)

}

module.exports.addDocumentary= async(req,res)=>{
    const {youtube_id,url, Context,hashtags} = req.body;
    DocumatryModel
    .create({youtube_id,url, Context,hashtags})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

