import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({user, setUser,isLogin,setIsLogin}) => {
  return (
    <div style={{height:"90vh", display:'flex',alignItems:'center', justifyContent:'center', backgroundColor:'pink'}}>
        <div style={{backgroundColor: 'white', height:'70vh', width:"40vw",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', borderRadius:"8px", border:"2px solid #FB6F90"}}>
            <h2>LOGIN</h2>
            <div><p>Name : </p><input type='text' placeholder='username'/></div>
            <div><p>Email : </p><input type='email' placeholder='xyz@xyz.com' value={user.email} onChange={(e)=>{setUser(e.target.value); console.log(user)}}/></div>
            <div><p>Password : </p><input type='password' placeholder='password'/></div>
            <div>
                <button onClick={()=>{
                    setIsLogin(!isLogin)
                }}>Register</button>
                <p>Not a user : <Link to="/register">register!</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login