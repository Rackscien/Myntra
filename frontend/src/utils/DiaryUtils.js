import axios from 'axios'
const BaseUrl="http://localhost:200/diary"

const getDiaryData=(userEmail,setDiaryData)=>{
    // console.log(`${theme}`);
    axios.post(`${BaseUrl}/`,{userEmail})
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

const addDiaryData= (content,userName,userEmail,setContent,setDiaryData)=>{
    axios
    .post(`${BaseUrl}/save`,{userName,content,userEmail})
    .then((data)=>{
        console.log(data);
        setContent("");
        getDiaryData(userEmail,setDiaryData);
    })
}

export {getDiaryData, addDiaryData}