import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddPostControler from "./pages/addPost/AddPostControler";
import ListPostControler from "./pages/listPost/ListPostControler";
import LoginControler from "./pages/login/LoginControler";
import RegisterControler from "./pages/register/RegisterControler";

function App() {

  return (
    <BrowserRouter>  
    <Header />
      <Routes>
        <Route path="/login" element={<LoginControler />} />
        <Route path="/list_post" element={<ListPostControler />} />
        <Route path="/add_post" element={<AddPostControler />} />
        <Route path="/register" element={<RegisterControler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
