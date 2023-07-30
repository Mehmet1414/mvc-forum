import { Link } from "react-router-dom";

const RegisterView = ({ handleSubmit, onInputChance }) => {
  return (
    <>
      <div className=" container flex flex-col items-center gap-4 mt-[10%] mx-auto  ">
        <header className=" w-[60%] flex justify-between items-end px-4 ">
          <span className=" text-xl font-bold">
            <span className=" bg-orange-700 px-5 text-5xl font-bold rounded-full mr-[-24px] ">
              f
            </span>
            orum
          </span>
          <span>Kayit Ekrani</span>
        </header>
        <form
          onSubmit={handleSubmit}
          className=" max-w-md  bg-neutral-800 shadow shadow-amber-300/30 rounded-lg flex flex-col gap-4 w-[60%] p-10 "
        >
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="name">Ad:</label>
            <input
              onChange={(e) => onInputChance("name", e.target.value)}
              className=" bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 "
              type="text"
              id="name"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="surName">Soyad: </label>
            <input
              onChange={(e) => onInputChance("surName", e.target.value)}
              className=" bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 "
              type="text"
              id="surName"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="userName">Kullanici Adi: </label>
            <input
              onChange={(e) => onInputChance("userName", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40"
              type="text"
              id="userName"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="email">E-mail: </label>
            <input
              onChange={(e) => onInputChance("email", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40"
              type="email"
              id="email"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="password">Sifre:</label>
            <input
              onChange={(e) => onInputChance("password", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40"
              type="password"
              id="password"
              required
            />
          </fieldset>

          <span className=" text-end">
            <button
              type="submit"
              className=" bg-transparent px-4 py-1 rounded-lg border border-amber-400/60 text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
            >
              KAYDOL
            </button>
          </span>
          <span className=" text-xs text-slate-400">
            Kullanici Kaydiniz Varsa Giris icin{" "}
            <Link
              className=" hover:text-amber-400 transition-all duration-200 underline"
              to={"/"}
            >
              Tiklayiniz...
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterView;
