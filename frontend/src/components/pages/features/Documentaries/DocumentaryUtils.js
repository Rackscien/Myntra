import axios from 'axios'
const BaseUrl="https://myntra-svcc.onrender.com/documentary"

const getDocumentaries=(setDocumentaries)=>{
    // console.log(`${theme}`);
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('data--->',data)
        setDocumentaries(data);
    })
}

const addDocumentaries = (youtube_id,setYoutube_id, url,setUrl, Context,setContext,hashtags,setHashtages,setDocumentaries)=>{
    axios
    .post(`${BaseUrl}/save`,{youtube_id, url, Context,hashtags})
    .then((data)=>{
        console.log(data);
        setYoutube_id("");
        setUrl("");
        setContext("");
        setHashtages("");
        getDocumentaries(setDocumentaries);
    })
}

export {getDocumentaries, addDocumentaries}