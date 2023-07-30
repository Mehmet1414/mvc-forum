import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  return (
    <>
      <header
        className={` container  px-8 py-5 m-auto sticky top-0 backdrop-blur-[5px] border-b-2  border-b-amber-500/80 flex justify-between items-center ${
          location.pathname === "/" || location.pathname === "/register"
            ? "hidden"
            : "visible"
        }`}
      >
        <NavLink to={"/list_post"}>
          <span className=" text-xl font-bold ">
            <span className=" bg-orange-700 px-5 text-5xl font-bold rounded-full mr-[-24px] ">
              f
            </span>
            orum
          </span>
        </NavLink>
        <span>
          <NavLink
            className={` font-bold ${
              location.pathname === "/add_post" ? "hidden" : ""
            } `}
            to={"/add_post"}
          >
            Yeni Ekle
          </NavLink>

          <NavLink
            className={` font-bold ${
              location.pathname === "/list_post" ? "hidden" : ""
            } `}
            to={"/list_post"}
          >
            Gönderi Listesi
          </NavLink>

          <span>{/* user  gelecek */}</span>
        </span>
      </header>
    </>
  );
};

export default Header;
