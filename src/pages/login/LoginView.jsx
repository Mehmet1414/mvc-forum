import { Link } from "react-router-dom";

const LoginView = ({ onInputchange, handleSbmit }) => {
  return (
    <>
      <div className=" container flex flex-col items-center gap-4 my-[30%] mx-auto  ">
      <header className=" w-[60%] flex justify-between items-end px-2">
          {" "}
          <span className=" text-xl font-bold">
            <span className=" bg-orange-700 px-5 text-5xl font-bold rounded-full mr-[-24px] ">
              f
            </span>
            orum
          </span>
          <span>Giris Ekrani</span>
        </header>
        <form
          onSubmit={handleSbmit}
          className=" max-w-md  bg-neutral-800 shadow shadow-amber-300/30 rounded-lg flex flex-col gap-4 w-[60%] p-10 "
        >
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="name"></label>
            <input
              onChange={(e) =>
                onInputchange("userName" || "email", e.target.value)
              }
              className=" bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 placeholder:text-slate-500 placeholder:text-sm "
              type="text"
              id="name"
              placeholder="Kullanici adi veya mail addresi  giriniz..."
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="title"></label>
            <input
              onChange={(e) => onInputchange("password", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40  placeholder:text-slate-500 placeholder:text-sm"
              type="password"
              id="password"
              placeholder="Sifrenizi giriniz..."
              required
            />
          </fieldset>

          <button
            type="submit"
            className=" bg-transparent px-4 py-1 rounded-lg border border-amber-400/60 text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
          >
            GÖNDER
          </button>

          <span className=" text-xs text-slate-400">
            Yeni Kullani olusturmak icin{" "}
            <Link
              className=" hover:text-amber-400 transition-all duration-200 underline"
              to={"/register"}
            >
              Tiklayiniz...
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginView;
