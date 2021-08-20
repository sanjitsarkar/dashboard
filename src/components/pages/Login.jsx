import React,{useState,useContext} from 'react'
import { AuthContext } from '../../App'

const Login = () => {
    const authCtx = useContext(AuthContext)
    const {authState,authDispatch} = authCtx
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const handleLogin = (e)=>{
        e.preventDefault()
        authDispatch({"type":"LOADING"})
       if(username==="admin" && password==="123")
       {
        authDispatch({"type":"SUCCESS","payload":{username}})
        authDispatch({"type":"FAILURE","payload":{error:""}})

           
       }
       else{
        authDispatch({"type":"FAILURE","payload":{error:"Invalid username and password combination."}})

       }
    }
    return (
        <div className="login">
              <form onSubmit={(e)=>handleLogin(e)}>
                  <label htmlFor="">Login</label>
                <input type="text" placeholder="Username" value = {username} onChange = {(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                {authState.errors && <p className="errors">{authState.errors.error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
