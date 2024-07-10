import axios from 'axios'
const BaseUrl="http://localhost:200/battle"

const getContent=(Theme,setContent)=>{
    console.log(`thee${Theme}`);
    axios.get(`${BaseUrl}/${Theme}`)
    .then(({data})=>{
        console.log('data--->',data)
        setContent(data);
    })
}

export {getContent}