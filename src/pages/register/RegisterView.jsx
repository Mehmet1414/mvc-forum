import { Link } from "react-router-dom";

const RegisterView = ({ handleSubmit, onInputChance,inputRef }) => {
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
            <label htmlFor="name"></label>
            <input
              onChange={(e) => onInputChance("name", e.target.value)}
              className=" placeholder:text-xs placeholder:text-slate-500 bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 focus:bg-amber-400/10 "
              type="text"
              id="name"
              required
              placeholder="Adinizi giriniz..."
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="surName"></label>
            <input
              onChange={(e) => onInputChance("surName", e.target.value)}
              className="placeholder:text-xs placeholder:text-slate-500 bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 focus:bg-amber-400/10 "
              type="text"
              id="surName"
              required
              placeholder="Soyadinizi giriniz..."
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="userName"></label>
            <input
              onChange={(e) => onInputChance("userName", e.target.value)}
              className=" placeholder:text-xs placeholder:text-slate-500 bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 focus:bg-amber-400/10"
              type="text"
              id="userName"
              required
              placeholder="Kullanici Adi giriniz..."
              ref={inputRef}
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="email"></label>
            <input
              onChange={(e) => onInputChance("email", e.target.value)}
              className="placeholder:text-xs placeholder:text-slate-500 bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 focus:bg-amber-400/10"
              type="email"
              id="email"
              required
              placeholder="Mail Adresinizi giriniz..."
              
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="password"></label>
            <input
              onChange={(e) => onInputChance("password", e.target.value)}
              className=" placeholder:text-xs placeholder:text-slate-500 bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 focus:bg-amber-400/10"
              type="password"
              id="password"
              required
              placeholder="Sifrenizi Tanimalayiniz..."
            />
          </fieldset>

          <span className=" text-end">
            <button
              type="submit"
              className=" w-full bg-transparent px-4 py-1 rounded-lg border border-amber-400/60 text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
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
