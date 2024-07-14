const AllData=require('../models/AllData')

module.exports.getData= async(req,res)=>{
    // const theme = req.params.theme;
    const data = await AllData.find()
    res.send(data)

}

module.exports.getDataById= async(req,res)=>{
    const id=req.params.id;
    const data = await AllData.find({_id : id});
    res.send(data)
}

module.exports.getDataByGender=async(req,res)=>{
    const {gender}=req.body;
    const data = await AllData.find({"name" : {$regex : `${gender}`}});
    res.send(data)
}

// module.exports.check= async(req,res)=>{
//     const id=req.params.id;
//     const solution = req.params.solution;
//     const quiz = await QuizModal.findById(id);
//     if(quiz.answer===solution){
//         res.json({success:true})
//     }
//     else(
//         res.json({success:false})
//     )
// }