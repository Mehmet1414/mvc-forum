import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddPostControler from "./pages/addPost/AddPostControler";
import ListPostControler from "./pages/listPost/ListPostControler";
import LoginControler from "./pages/login/LoginControler";
import RegisterControler from "./pages/register/RegisterControler";

function App() {
const [userData,setUserData]=useState(null)
  console.log(userData)
  return (
    <>
      <Header setUserData={setUserData} />
      <Routes>
        {!userData ? (
          <Route path="/" element={<LoginControler setUserData={setUserData} />} />

        ):(
          <>
          
          <Route path="/list_post" element={<ListPostControler />} />
          <Route path="/add_post" element={<AddPostControler />} />
          </>
        )}
        <Route path="/register" element={<RegisterControler />} />
      </Routes>
    </>
  );
}

export default App;
