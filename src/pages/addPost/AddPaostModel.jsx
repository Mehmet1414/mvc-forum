class AddPostModel {
  state = {
    id: new Date().getTime(),
    name: "",
    title: "",
    date: new Date().toDateString(),
    message: "",
  };
}

export default AddPostModel;
