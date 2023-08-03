import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";
import LoginView from "./LoginView";

const LoginControler = ({ setUserData }) => {
  const navigate = useNavigate();
  const loginModel = new LoginModel();
  const [userLogin, setUserLogin] = useState(loginModel.state);

  //console.log("userLogin>>>", userLogin);
  const onInputchange = (label, value) => {
    setUserLogin((user) => ({ ...user, [label]: value }));
  };

  const handleSbmit = async (e) => {
    e.preventDefault();
    const userResponse = await axios.get("http://localhost:3006/users");
    //console.log(userResponse.data)

    const { userName, password } = userLogin;

    //console.log("User>>>>>", userName, password);
    const foundUser = userResponse.data.find(
      (user) => user.userName === userName && user.password === password
    );
    console.log("foundUser>>>", foundUser);
  console.log("userName>>>", userName);

    setUserData(foundUser);

    const data = JSON.stringify(foundUser);

    if (foundUser?.userName === userName && foundUser?.password === password) {
      localStorage.setItem("user", data);
      navigate("/list_post");
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  return <LoginView onInputchange={onInputchange} handleSbmit={handleSbmit} />;
};

export default LoginControler;
