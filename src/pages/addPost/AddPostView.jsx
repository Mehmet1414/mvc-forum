import Header from "../../components/Header";

const AddPostView = ({ inputChange, handleSubmit }) => {
  return (
    <>
    <Header />
      <div className=" container flex flex-col items-center gap-4 mt-[10%] mx-auto  ">
        <form
          onSubmit={handleSubmit}
          className=" max-w-md  bg-neutral-800 shadow shadow-amber-300/30 rounded-lg flex flex-col gap-4 w-[60%] p-10 "
        >
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="name">Kullanici:</label>
            <input
              onChange={(e) => inputChange("name", e.target.value)}
              className=" bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40 "
              type="text"
              id="name"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="title">Baslik:</label>
            <input
              onChange={(e) => inputChange("title", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40"
              type="text"
              id="title"
              required
            />
          </fieldset>
          <fieldset className=" flex flex-col gap-2">
            <label htmlFor="text">Mesaj:</label>
            <textarea
              onChange={(e) => inputChange("message", e.target.value)}
              className="  bg-transparent/50 rounded-md p-2 focus:outline-none caret-amber-400/70 text-amber-400/70 focus:ring-1 ring-inset focus: ring-amber-400/40"
              id="message"
              name="message"
              cols="20"
              rows="4"
              type="text"
              required
            ></textarea>{" "}
          </fieldset>
          <span className=" text-end">
            <button
              type="submit"
              className=" bg-transparent px-4 py-1 rounded-lg border border-amber-400/60 text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
            >
              GÖNDER
            </button>
          </span>
        </form>
      </div>
    </>
  );
};

export default AddPostView;
