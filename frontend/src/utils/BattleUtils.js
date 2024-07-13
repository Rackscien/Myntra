import axios from 'axios'
const BaseUrl="http://localhost:200/battle"

const getContent=(Theme,setContent)=>{
    console.log(`theme ${Theme}`);
    axios.get(`${BaseUrl}/`,{theme:Theme})
    .then(({data})=>{
        console.log('Theme data--->',data)
        setContent(data);
    })
}

const addContent = (name,setName,image,setImage,Theme,vote,setContent)=>{
    axios
    .post(`${BaseUrl}/save`,{image,name,theme:Theme,vote})
    .then((data)=>{
        console.log(data);
        setName("")
        setImage("");
        getContent(Theme, setContent);
    })
}
 
const addVote=(id,Theme,setContent)=>{
    // console.log(`${vote}`)
    axios
    .post(`${BaseUrl}/updateVote/${id}`)
    .then((data)=>{
        console.log(data);
        // setVote(0);
        getContent(Theme, setContent);
    })
}

export {getContent , addContent , addVote}