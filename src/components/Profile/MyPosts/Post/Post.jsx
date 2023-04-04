import React from "react";
import styles from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.avatarPhoto}>
        <img
          alt="avatar"
          src="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
        ></img>
      </div>
      <div className="Message">{props.message}</div>
      <span>{props.likesAmount}likes</span>
    </div>
  );
};
export default Post;
