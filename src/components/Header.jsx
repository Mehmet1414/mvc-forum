import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showAddLink, setShowAdLink] = useState(true);
  return (
    <>
      <header className=" container  px-8 py-5 m-auto sticky top-0 backdrop-blur-[5px] border-b-2  border-b-amber-500/80 flex justify-between items-center ">
       <NavLink  onClick={()=> setShowAdLink(true)} to={"/"}>
        <span className=" text-xl font-bold">
          <span className=" bg-orange-700 px-5 text-5xl font-bold rounded-full mr-[-24px] ">
            f
          </span>
          orum
        </span>
       </NavLink>
        <span>
        {showAddLink ? (
          <NavLink
            onClick={() => setShowAdLink(false)}
            className=" font-bold"
            to={"/add_post"}
          >
            Yeni Ekle
          </NavLink>
        ) : (
          <NavLink
            onClick={()=>setShowAdLink(true)}
            className=" font-bold"
            to={"/list_post"}
          >
            Gönderi Listesi
          </NavLink>
        )}
          <span>
            user
          </span>
        </span>

        </header>
    </>
  );
};

export default Header;
