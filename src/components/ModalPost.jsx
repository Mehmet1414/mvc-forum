

const ModalPost = ({ showModal, setShowModal, filterState }) => {
  console.log(filterState);
  return (
    <>
      <div className=" bg-white/30 z-10 fixed top-0 h-full w-full   ">
          
            
        <div className="container top-20 relative mx-auto max-w-xl bg-neutral-800 shadow shadow-amber-300/30 rounded-lg w-[60%] h-[80%] px-8 py-10 overflow-auto  ">
          <button
            onClick={() => setShowModal(!showModal)}
            className=" bg-neutral-800 border border-amber-400 px-2 text-amber-400 sticky left-full top-0  "
          >
            x
          </button>
          <p><span className=" text-amber-500">{filterState[0].name}</span> kullanicisina ait mesajlar</p>
          {filterState.map((post) => (
            <div key={post.id} className=" py-3 ">
              <div  className=" bg-white rounded-xl border border-amber-400 flex items-center justify-between p-3">
                <div className=" text-neutral-800 overflow-auto">
                  <h1 className=" text-4xl text-center mb-2 uppercase ">{post.title}</h1>
                  <p>{post.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          
      </div>
    </>
  );
};

export default ModalPost;
