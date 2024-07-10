import axios from 'axios'
const BaseUrl="http://localhost:200/battleTheme"

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