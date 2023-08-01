

class AddPostModel {
  state = {
    id: new Date().getTime(),
    userName:"",
    title: "",
    date: new Date().toDateString(),
    message: "",
  };
}

export default AddPostModel;
