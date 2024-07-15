import axios from 'axios'
const BaseUrl="https://myntra-svcc.onrender.com/battleTheme"

const getThemes=(setThemes)=>{
    // console.log(`${theme}`);
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        console.log('data--->',data)
        setThemes(data);
    })
}

const addThemes = (newTheme, setThemes, setNewTheme)=>{
    axios
    .post(`${BaseUrl}/save`,{theme:newTheme})
    .then((data)=>{
        console.log(data);
        setNewTheme("");
        getThemes(setThemes);
    })
}

export {getThemes, addThemes}