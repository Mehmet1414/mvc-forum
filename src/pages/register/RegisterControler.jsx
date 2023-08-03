import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterView from "./RegisterView";
import RegisterModel from "./RgisterModel";

const RegisterControler = () => {
  const navigate = useNavigate();
  const model = new RegisterModel();
  const [userState, setUserState] = useState(model.state);
  const [users, setUsers] = useState(null);
  const inputRef = useRef()
  

  useEffect(() => {
    (async () => {
      const usersData = await axios.get("http://localhost:3006/users");
      console.log(usersData.data);
      setUsers(usersData.data);
    })();
  }, []);

  const onInputChance = (label, value) => {
    setUserState((prev) => ({ ...prev, [label]: value }));
    /* const copyUserState = { ...userState };
    copyUserState[label] = value;
    setUserState(copyUserState); */
  };
/*   const filteredUserName = users.filter(
    (user) => user.userName === userState.userName
    );
    console.log(filteredUserName) */
    
  const checkIfUserExists = users?.find((user) => user.userName === userState.userName);
  
    //console.log(checkIfUserExists)

  const handleSubmit = async (e) => {
    e.preventDefault();

      if (!checkIfUserExists) {
        
        const response = await axios.post("http://localhost:3006/users", userState);
        //console.log(response);
        if (response) {
          navigate("/"); 
        }
      } else {
        alert("farkli Kullanici adi seciniz ");
        if (inputRef.current) {
          inputRef.current.focus()
          
        }
       
    }
  };
  console.log(userState);

  return (
    <RegisterView handleSubmit={handleSubmit} onInputChance={onInputChance} inputRef={inputRef}  />
  );
};

export default RegisterControler;
