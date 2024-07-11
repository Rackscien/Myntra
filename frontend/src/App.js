
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


function App() {
  const [user,setUser]=useState({
    email:""
  })

  const [show, setShow] = useState({
    men:false,
    women:false,
    kids:false,
    user:false,
    features:false,
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route path='/' element={<Layout show={show} setShow={setShow}/>}>
          <Route index element={<Home show={show} setShow={setShow}/>}/>
          <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/squad' element={<Style_Squads show={show} setShow={setShow}/>}/>
          <Route path='/battles' element={<Style_Battles show={show} setShow={setShow}/>}/>
          <Route path='/quiz' element={<Style_quiz show={show} setShow={setShow}/>}/>
          <Route path='/diary' element={<Style_Diary show={show} setShow={setShow}/>}/>
          <Route path='/scenes' element={<Behind_the_scenes show={show} setShow={setShow}/>}/>
          <Route path='/fashion' element={<Latest_fashion show={show} setShow={setShow} />}/>
          <Route path='/documentaries' element={<Documentaries show={show} setShow={setShow}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
