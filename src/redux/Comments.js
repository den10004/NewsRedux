import { useState, useEffect } from "react";
import uniqid from "uniqid";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "./actions";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res, index) => {
          return <SingleComment key={index} data={res} />;
        })}
    </div>
  );
}

export default Comments;
