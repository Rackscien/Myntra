
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState({
    email:""
  })

  const [show, setShow] = useState({
    men:false,
    women:false,
    kids:false
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route path='/' element={<Layout show={show} setShow={setShow}/>}>
          <Route index element={<Home show={show} setShow={setShow}/>}/>
          <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
