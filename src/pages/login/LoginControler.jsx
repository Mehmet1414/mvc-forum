import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginModel from "./LoginModel"
import LoginView from "./LoginView"

const LoginControler = () => {
    const navigate=useNavigate()
    const model = new LoginModel()
    const [userLogin,setUserLogin]=useState(model.state)
    //console.log("userLogin.userName>>>",userLogin.userName)

    const onInputchange = (label,value)=>{
      const copyUserLogin = {...userLogin}
      copyUserLogin[label]=value
      setUserLogin(copyUserLogin)

    }
    const handleSbmit = async(e)=>{
      e.preventDefault()
      const userResponse = await axios.get("http://localhost:3006/users")
      //console.log(userResponse.data)
      const userNames =userResponse.data.map((user)=>user.userName)
      const findUserName = userNames.find((user)=>user === userLogin.userName)

      const emails =userResponse.data.map((user)=>user.email)
      const findEmail =emails.find((user)=>user ===userLogin.email)

      const passwords =userResponse.data.map((user)=>user.password)
      const findPassword = passwords.find((user)=>user===userLogin.password)
      
      if (!findUserName || !findEmail && !findPassword ) {
        
        alert("kullanici veya sifre hatali")
      }else{
        navigate("/list_post")
      }
    }
  return <LoginView onInputchange={onInputchange} handleSbmit={handleSbmit} />
}

export default LoginControler