import Header from "../../components/Header";
import ModalPost from "../../components/ModalPost";

const ListPostView = ({
  blogState,
  showUserPost,
  showModal,
  setShowModal,
  filterState,
}) => {
  return (
    <>
      <div className=" container flex flex-col items-center gap-4 mt-[10%] mx-auto  ">
        {blogState.map((post) => (
          <div
            key={post.id}
            className=" max-w-2xl bg-neutral-800 shadow shadow-amber-300/30 rounded-lg w-[80%] p-8 "
          >
            <div className=" flex items-center justify-between gap-3  text-slate-200 max-sm:flex-col-reverse max-sm:float-left ">
              <div className=" w-full max-sm:float-left">
                <h3 className=" text-4xl mb-2 uppercase ">{post.title}</h3>
                <p>{post.message}</p>
                <span className=" text-xs text-slate-300/50  ">{post.date}</span>
              </div>
              <div className=" w-full flex flex-col flex-1 items-start capitalize sm:border-l border-l-amber-500/50 sm:pl-2 max-sm:block max-sm:mb-3 max-sm:border-b max-sm:border-b-amber-400/50 ">
                <span className=" flex flex-col items-start  ">
                  <span className=" border bg-amber-500 rounded-full px-3 py-2   ">
                    {post.name ? post.name[0] : ""}
                  </span>{" "}
                  <span>{post.name}</span>
                </span>
                <small
                  onClick={() => showUserPost(post.name)}
                  className=" text-gray-400 cursor-pointer hover:text-amber-400 "
                >
                  Diger gönderileri...
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <ModalPost
          showModal={showModal}
          setShowModal={setShowModal}
          filterState={filterState}
        />
      )}
    </>
  );
};

export default ListPostView;
