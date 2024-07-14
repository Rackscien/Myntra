import axios from 'axios'
const BaseUrl="http://localhost:200/cart"

const getCart=(userName, setCartData)=>{
    // console.log(`${theme}`);
    const maindata = [];
    axios.get(`${BaseUrl}/`)
    .then(({data})=>{
        // console.log('Data--->',data)
        for(let i=0;i<data.length;i++){
            if(data[i].userName===userName){
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
            maindata.push(obj);}
        }
        setCartData(maindata);
    })
}
const addCartData = (name,img,price,mrp,discount,seller,userName, setCartData)=>{
    axios
    .post(`${BaseUrl}/save`,{name,img,price,mrp,discount,seller,userName})
    .then((data)=>{
        // console.log(data);
       
        getCart(userName,setCartData);
    })
}

const removeCartData=(_id,userName, setCartData)=>{
    // console.log(_id)
    axios
    .post(`${BaseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
       
        getCart(userName, setCartData);
    })
}
export {getCart, addCartData, removeCartData}