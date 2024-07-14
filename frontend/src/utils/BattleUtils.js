import axios from 'axios'
const BaseUrl="http://localhost:200/battle"

const getContent=(Theme,setContent)=>{
    // console.log(`theme ${Theme}`);
    axios.get(`${BaseUrl}/`,{theme:Theme})
    .then(({data})=>{
        // console.log('Theme data--->',data)
        const filter=[];
        for(let i=0;i<data.length;i++){
            if(data[i].theme===Theme){
                filter.push(data[i])
            }
        }
        setContent(filter);
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
 
const addVote=(id,vote,Theme,setContent)=>{
    // console.log(`${vote}`)   
    axios
    .post(`${BaseUrl}/updateVote/${id}`,{vote})
    .then((data)=>{
        console.log(data);
        // setVote(0);
        getContent(Theme, setContent);
    })
}

export {getContent , addContent , addVote}