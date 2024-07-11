import React,{useState,useContext} from 'react'
import userContext from '../../context/userContext'


const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(userContext)
    const handleSubmmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
         type="text" placeholder='username' />
         <br />
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         type="password" placeholder='password' />
         <br />
        <button onClick={handleSubmmit}>submit</button>
    </div>
  )
}

export default Login