import axios from 'axios'
const BaseUrl="http://localhost:200/squad"

const getSquadData=(selectedGroup,setSquadData)=>{
    // console.log(`${theme}`);
    axios.post(`${BaseUrl}/`,{Fashion:selectedGroup})
    .then(({data})=>{
        console.log('squad--->',data)
        setSquadData(data);
    })
}

const addSquadData= (content,userName,userEmail,selectedGroup,setContent,setSquadData)=>{
    axios
    .post(`${BaseUrl}/save`,{userName,content,userEmail,Fashion:selectedGroup})
    .then((data)=>{
        console.log(data);
        setContent("");
        getSquadData(selectedGroup,setSquadData);
    })
}

export {getSquadData, addSquadData}