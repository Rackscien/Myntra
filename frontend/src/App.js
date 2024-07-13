
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { useState } from 'react';
import WishList from './components/pages/WishList';
import Bag from './components/pages/Bag';
import Style_Squads from './components/pages/features/Style_Squads';
import Style_Battles from './components/pages/features/Style_Battles';
// import Style_quiz from './components/pages/features/Style_quiz';
import Style_Diary from './components/pages/features/Style_Diary';
import Behind_the_scenes from './components/pages/features/Behind_the_scenes';
import Latest_fashion from './components/pages/features/Latest_fashion';


import styled from 'styled-components'
import Style_quiz from './components/pages/features/quiz/Style_quiz';
import Documentaries from './components/pages/features/Documentaries/Documentaries';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Search from './components/pages/Search';


function App() {
  const [user,setUser]=useState({
    email:""
  })

  const [show, setShow] = useState({
    
    user:false,
    features:false,
  });
  const [wishListData, setWishListData]=useState([])
  const [CartData, setCartData]=useState([])

  const [searchContent,setSearchContent]=useState("");
  const [searchData,setSearchData]=useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route path='/' element={<Layout show={show} setShow={setShow} setSearchContent={setSearchContent} setSearchData={setSearchData}/>}>
          <Route index element={<Home show={show} setShow={setShow}/>}/>
          <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/wishlist' element={<WishList show={show} setShow={setShow} wishListData={wishListData} setWishListData={setWishListData} setCartData={setCartData}/>}/>
          <Route path='/bag' element={<Bag show={show} setShow={setShow} CartData={CartData}  setCartData={setCartData}/>}/>
          <Route path='/squad' element={<Style_Squads show={show} setShow={setShow}/>}/>
          <Route path='/battles' element={<Style_Battles show={show} setShow={setShow}/>}/>
          <Route path='/quiz' element={<Style_quiz show={show} setShow={setShow}/>}/>
          <Route path='/diary' element={<Style_Diary show={show} setShow={setShow}/>}/>
          <Route path='/scenes' element={<Behind_the_scenes show={show} setShow={setShow}/>}/>
          <Route path='/fashion' element={<Latest_fashion show={show} setShow={setShow} />}/>
          <Route path='/documentaries' element={<Documentaries show={show} setShow={setShow}/>}/>
          <Route path='/men' element={<Men show={show} setShow={setShow} wishListData={wishListData} setWishListData={setWishListData} CartData={CartData} setCartData={setCartData}/>}/>
          <Route path='/women' element={<Women show={show} setShow={setShow} wishListData={wishListData} setWishListData={setWishListData} setCartData={setCartData}/>}/>
          <Route path='/search' element={<Search show={show} setShow={setShow}  setWishListData={setWishListData} setCartData={setCartData} searchData={searchData} setSearchData={setSearchData}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
