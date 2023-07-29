import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterView from "./RegisterView";
import RegisterModel from "./RgisterModel";

const RegisterControler = () => {
  const navigate =useNavigate()
  const model = new RegisterModel();
  const [userState, setUserState] = useState(model.state);
  const onInputChance = (label, value) => {
    const copyUserState = { ...userState };
    copyUserState[label] = value;
    setUserState(copyUserState);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3006/users",userState)
    console.log(response)

    if (response) {
      navigate("/user/login")
    }
  };
console.log(userState)

  return (
    <RegisterView handleSubmit={handleSubmit} onInputChance={onInputChance} />
  );
};

export default RegisterControler;
