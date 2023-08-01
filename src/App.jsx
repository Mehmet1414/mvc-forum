import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddPostControler from "./pages/addPost/AddPostControler";
import ListPostControler from "./pages/listPost/ListPostControler";
import LoginControler from "./pages/login/LoginControler";
import RegisterControler from "./pages/register/RegisterControler";

function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(localStorage.getItem("user"));
  //console.log(userData);
  useEffect(() => {
    if (!userData) {
      navigate("/");
    } else {
      navigate("/list_post");
    }
  }, [userData]);
  return (
    <>
      <Header setUserData={setUserData} />
      <Routes>
        <Route
          path="/"
          element={<LoginControler setUserData={setUserData} />}
        />
        <Route path="/list_post" element={<ListPostControler />} />
        <Route path="/add_post" element={<AddPostControler />} />
        <Route path="/register" element={<RegisterControler />} />
      </Routes>
    </>
  );
}

export default App;
