const PostItem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id} . {props.post.title}</strong>
        <div>Javascript - programming language</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
