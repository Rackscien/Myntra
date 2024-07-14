import axios from 'axios'
const BaseUrl="http://localhost:200/squad"

const getSquadData=(setSquadData)=>{
    // console.log(`${theme}`);
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('squad--->',data)
        setSquadData(data);
    })
}

const addSquadData= (content,userName,userEmail,setContent,setSquadData)=>{
    axios
    .post(`${BaseUrl}/save`,{userName,content,userEmail})
    .then((data)=>{
        console.log(data);
        setContent("");
        getSquadData(setSquadData);
    })
}

export {getSquadData, addSquadData}