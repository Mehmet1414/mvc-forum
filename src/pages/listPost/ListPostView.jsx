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
    <Header  />
      <div className=" container flex flex-col items-center gap-4 mt-[10%] mx-auto  ">
        {blogState.map((post) => (
          <div
            key={post.id}
            className=" max-w-2xl bg-neutral-800 shadow shadow-amber-300/30 rounded-lg w-[80%] p-8 "
          >
            <div className=" flex items-center justify-between">
              <div>
                <h1 className=" text-4xl mb-2 uppercase ">{post.title}</h1>
                <p>{post.message}</p>
              </div>
              <div className=" flex flex-col gap-3 items-center capitalize  ">
                <span>
                  <span className=" border bg-amber-500 rounded-full px-3 py-2   ">
                    {post.name ? post.name[0] : ""}
                  </span>{" "}
                  <span>{post.name}</span>
                </span>
                <small
                  onClick={() => showUserPost(post.name)}
                  className=" text-gray-400 cursor-pointer"
                >
                  Diger Gönderileri...
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
