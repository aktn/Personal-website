import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

const post = props => {
  const emptyMessage = <p>There is no post yet.</p>;
  console.log(props);

  const posts = (
    <div className="postBlock">
      <div className="postContent">
        <p className="postContent--title">{props.title}</p>
        <p>{props.body}</p>
      </div>
      <div className="postBtn">
        <Link to={`/post/${props.id}`} className="postBtn--update">
          Edit
        </Link>
        <button onClick={props.onUpdate} className="postBtn--update">
          Update
        </button>
        <button onClick={props.onDelete} className="postBtn--delete">
          Delete
        </button>
      </div>
    </div>
  );

  return <div>{posts.length === 0 ? emptyMessage : posts}</div>;
};

export default post;
