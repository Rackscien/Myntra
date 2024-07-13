import axios from 'axios'
const BaseUrl="http://localhost:200/quiz"

const getQuiz=(setAllQuiz)=>{
    
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('Quiz data--->',data)
        setAllQuiz(data);
    })
}

const addQuiz = (question,setQuestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,answer,setAnswer, setAllQuiz)=>{
    axios
    .post(`${BaseUrl}/save`,{question,option1,option2,option3,option4,answer})
    .then((data)=>{
        console.log(data);
        setQuestion("")
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setAnswer("");
        getQuiz(setAllQuiz);
    })
}

const checkquiz=(id,answer,setAnswer,setStatus)=>{
    console.log(id);
    console.log(answer);
    const url = `${BaseUrl}/check/${id}/${answer}`;
    axios.get(url)
    .then(({data})=>{
        console.log('answer --->',data)
        setStatus(data);
        setAnswer("")
    })
}

export {getQuiz , addQuiz , checkquiz}