const QuizModal=require('../models/QuizModel')

module.exports.getQuiz= async(req,res)=>{
    // const theme = req.params.theme;
    const quiz = await QuizModal.find()
    res.send(quiz)

}

module.exports.addQuiz= async(req,res)=>{
    const { question,option1,option2,option3,option4,category,answer } = req.body;
    QuizModal
    .create({ question,option1,option2,option3,option4,category,answer })
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.check= async(req,res)=>{
    const id=req.params.id;
    const solution = req.params.solution;
    const quiz = await QuizModal.findById(id);
    if(quiz.answer===solution){
        res.json({success:true})
    }
    else(
        res.json({success:false})
    )
}