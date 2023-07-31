import axios from "axios";
import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";

const ListPostControler = () => {
  const [blogState, setBlogState] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterState, setFilterState] = useState(null)
  //console.log(blogState)

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3006/posts");
      setBlogState(response.data);
    })();
  }, []);

  const showUserPost = (userName) => {
    setShowModal(!showModal)
    const filterData = blogState.filter((post)=>post.name===userName)
    setFilterState(filterData)
  };
  if (blogState) {
    return (
      <ListPostView
        blogState={blogState}
        showUserPost={showUserPost}
        showModal={showModal}
        setShowModal={setShowModal}
        filterState={filterState}
       
        
      />
    );
  }
};

export default ListPostControler;
