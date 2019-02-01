import React from "react";

const post = props => {
  const emptyMessage = <p>There is no post yet.</p>;

  const posts = (
    <div className="">
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  );

  return <div>{posts.length === 0 ? emptyMessage : posts}</div>;
};

export default post;
