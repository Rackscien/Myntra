import axios from 'axios'
const BaseUrl="https://myntra-svcc.onrender.com/data"

const getData=(setData)=>{
    // console.log(`${theme}`);
    const maindata = [];
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        // console.log('Data--->',data)
        for(let i=0;i<data.length;i++){
            const img1 = data[i].img.toString().split(";");
            console.log(img1[6]);
            const obj = data[i];
            obj.img0 = img1[img1.length-1];
            obj.img1 = img1[0];
            obj.img2 = img1[1];
            obj.img3 = img1[2];
            obj.img4 = img1[3];
            obj.img5 = img1[4];
            obj.img6 = img1[5];
            maindata.push(obj);
        }
        setData(maindata);
    })
}

const getGenderData=(gender,setMenData)=>{
    const maindata = [];
    axios.post(`${BaseUrl}/search`,{gender})
    .then(({data})=>{
        // console.log('Data--->',data)
        for(let i=0;i<data.length;i++){
            const img1 = data[i].img.toString().split(";");
            console.log(img1[6]);
            const obj = data[i];
            obj.img0 = img1[img1.length-1];
            obj.img1 = img1[0];
            obj.img2 = img1[1];
            obj.img3 = img1[2];
            obj.img4 = img1[3];
            obj.img5 = img1[4];
            obj.img6 = img1[5];
            maindata.push(obj);
        }
        setMenData(maindata);
    })
}

const getWatch = (gender,setWatch)=>{
    const maindata = [];
    axios.post(`${BaseUrl}/search`,{gender})
    .then(({data})=>{
        // console.log('Data--->',data)
        if(data.length>6){
        for(let i=0;i<6;i++){
            const img1 = data[i].img.toString().split(";");
            console.log(img1[6]);
            const obj = data[i];
            obj.img0 = img1[img1.length-1];
            obj.img1 = img1[0];
            obj.img2 = img1[1];
            obj.img3 = img1[2];
            obj.img4 = img1[3];
            obj.img5 = img1[4];
            obj.img6 = img1[5];
            maindata.push(obj);
        }}
        else{
            for(let i=0;i<data.length;i++){
                const img1 = data[i].img.toString().split(";");
                console.log(img1[6]);
                const obj = data[i];
                obj.img0 = img1[img1.length-1];
                obj.img1 = img1[0];
                obj.img2 = img1[1];
                obj.img3 = img1[2];
                obj.img4 = img1[3];
                obj.img5 = img1[4];
                obj.img6 = img1[5];
                maindata.push(obj);
            }
        }
        setWatch(maindata);
    })
}
const getAnyData=(gender,setSearchData,setInput)=>{
    const maindata = [];
    axios.post(`${BaseUrl}/search`,{gender})
    .then(({data})=>{
        // console.log('Data--->',data)
        for(let i=0;i<data.length;i++){
            const img1 = data[i].img.toString().split(";");
            console.log(img1[6]);
            const obj = data[i];
            obj.img0 = img1[img1.length-1];
            obj.img1 = img1[0];
            obj.img2 = img1[1];
            obj.img3 = img1[2];
            obj.img4 = img1[3];
            obj.img5 = img1[4];
            obj.img6 = img1[5];
            maindata.push(obj);
        }
        
        setSearchData(maindata);
        setInput("");
    })
}
export {getData, getGenderData,getWatch,getAnyData}