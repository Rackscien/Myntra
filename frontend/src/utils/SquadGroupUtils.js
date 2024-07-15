import axios from 'axios'
const BaseUrl="https://myntra-svcc.onrender.com/squadGroup"

const getFashionGroup=(setFashionGroup)=>{
    // console.log(`${theme}`);
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('data--->',data)
        setFashionGroup(data);
    })
}

const addFashionGroup =(Fashion, setFashion, setFashionGroup)=>{
    axios
    .post(`${BaseUrl}/save`,{Fashion})
    .then((data)=>{
        console.log(data);
        setFashion("");
        getFashionGroup(setFashionGroup);
    })
}

export {getFashionGroup, addFashionGroup}