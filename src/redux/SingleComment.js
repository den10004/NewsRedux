import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./actions";
import { useDispatch } from "react-redux";

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id, url } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
        {" "}
        <a href={data.url} target="_blank">
          {data.url}
        </a>
        <input type="text" value={commentText} onChange={handleInput} />
        <input type="submit" hidden />
      </div>
    </form>
  );
}

export default SingleComment;
