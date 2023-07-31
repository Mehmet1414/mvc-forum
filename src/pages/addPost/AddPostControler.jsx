import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPostModel from "./AddPaostModel";
import AddPostView from "./AddPostView";

const AddPostControler = () => {

    const navigate = useNavigate()
  const model = new AddPostModel();
  const [addForm, setAddForm] = useState(model.state);

  const inputChange = (label, value) => {

    setAddForm((prev)=>({...prev, [label]:value}))
    
    /* const copyAddForm = { ...addForm };
    copyAddForm[label] = value;
    setAddForm(copyAddForm); */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const respenseDta = await axios.post("http://localhost:3006/posts", addForm);


    if (respenseDta) {   
        navigate("/list_post")
        return
    }
  };

  return <AddPostView inputChange={inputChange} handleSubmit={handleSubmit} />;
};

export default AddPostControler;
