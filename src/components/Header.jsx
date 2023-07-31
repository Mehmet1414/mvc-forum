import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({setUserData}) => {
  const navigate=useNavigate()
  const location = useLocation();
  const data= localStorage.getItem("user")
  const User = JSON.parse(data)

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
        <span className="flex justify-center items-center gap-4">
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

          <span className="flex justify-center items-center gap-2 border-l border-l-amber-500 pl-2">
              <span className=" border bg-amber-500 rounded-full w-10 h-10 flex justify-center items-center font-bold  ">
                {User?.userName[0]}
              </span>{" "}
              <span className="flex flex-col ">
              <span>{User?.userName}</span>
              <span onClick={()=>{
                setUserData(null)
                localStorage.removeItem("loginUser")
                navigate("/")
              }} className="text-xs font-semibold  rounded-xl hover:text-amber-400 cursor-pointer">
                CIKIS
              </span>
              </span>
            
          </span>
        </span>
      </header>
    </>
  );
};

export default Header;
