import axios from 'axios'
const BaseUrl="http://localhost:200/diary"

const getDiaryData=(userName,setDiaryData)=>{
    // console.log(`${theme}`);
    axios.get(`${BaseUrl}/`,{userName})
    .then(({data})=>{
        console.log('diary--->',data)
        // const filter=[];
        // for(let i=0;i<data.length;i++){
        //     if(data[i].userName===userName)
        //         filter.push(data[i])
        // }
        setDiaryData(data);
    })
}

const addDiaryData= (content,userName,setContent,setDiaryData)=>{
    axios
    .post(`${BaseUrl}/save`,{userName,content})
    .then((data)=>{
        console.log(data);
        setContent("");
        getDiaryData(userName,setDiaryData);
    })
}

export {getDiaryData, addDiaryData}