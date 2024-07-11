import axios from 'axios'
const BaseUrl="http://localhost:200/quiz"

const getQuiz=(setAllQuiz)=>{
    
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('Quiz data--->',data)
        setAllQuiz(data);
    })
}

const addQuiz = ()=>{
    // axios
    // .post(`${BaseUrl}/save`,{image,name,theme:Theme,vote})
    // .then((data)=>{
    //     console.log(data);
    //     setName("")
    //     setImage("");
    //     getContent(Theme, setContent);
    // })
}

const checkquiz=(id,answer,setAnswer,setStatus)=>{
    console.log(id);
    console.log(answer);
    axios.get(`${BaseUrl}/${id}/${answer}`)
    .then(({data})=>{
        console.log('Quiz data--->',data)
        setStatus({data});
        setAnswer("")
    })
}

export {getQuiz , addQuiz , checkquiz}