import axios from 'axios'
const BaseUrl="http://localhost:200/wishList"

const getWishList=(setWishListData)=>{
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
        setWishListData(maindata);
    })
}
const addWishListData = (name,img,price,mrp,discount,seller,setWishListData)=>{
    axios
    .post(`${BaseUrl}/save`,{name,img,price,mrp,discount,seller})
    .then((data)=>{
        // console.log(data);
       
        getWishList(setWishListData);
    })
}

const removeWishlistData= (id,setWishListData)=>{
    console.log(id)
    axios
    .post(`${BaseUrl}/delete`,{id})
    .then((data)=>{
        // console.log(data);
       
        getWishList(setWishListData);
    })
}
export {getWishList, addWishListData,removeWishlistData}