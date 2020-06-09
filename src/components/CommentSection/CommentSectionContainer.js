// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState("");

  const changeComment = (e) => {
    setNewComment(e.target.value);
  }

  const submitComment = e => {
    e.preventDefault();
    setComments([...comments, { username: "steph-gatt", text: newComment }]);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        comments.map((data, i) => (
          <Comment comment={data} key={i} />
        ))
      }
      <CommentInput 
        changeComment={changeComment} 
        comment={newComment} 
        submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
