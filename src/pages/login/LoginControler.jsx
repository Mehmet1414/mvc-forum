import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginModel from "./LoginModel"
import LoginView from "./LoginView"

const LoginControler = ({setFilterUserName}) => {
    const navigate=useNavigate()
    const model = new LoginModel()
    const [userLogin,setUserLogin]=useState(model.state)
    console.log(userLogin.userName)
    console.log(userLogin.password)

    const onInputchange = (label,value)=>{
      const copyUserLogin = {...userLogin}
      copyUserLogin[label]=value
      setUserLogin(copyUserLogin)

    }
    const handleSbmit = async(e)=>{
      e.preventDefault()
      const userResponse = await axios.get("http://localhost:3006/users")
      console.log(userResponse.data)
      const userNames =userResponse.data.map((user)=>user.userName)
      const filterUserName = userNames.filter((user)=>user.userName === userLogin.userName)
      const emails =userResponse.data.map((user)=>user.email)
      const filterEmail =emails.filter((user)=>user.email ===userLogin.email)
      const passwords =userResponse.data.map((user)=>user.password)
      const filterPassword = passwords.filter((user)=>user.password===userLogin.password)
      
      if (filterUserName || filterEmail && filterPassword ) {
        
        navigate("/list_post")
      }else{
        alert("kullanici veya sifre hatali")
      }
    }
  return <LoginView onInputchange={onInputchange} handleSbmit={handleSbmit} />
}

export default LoginControler