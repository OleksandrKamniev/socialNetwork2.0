import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  let posts = props.posts.map((post) => {
    return (
      <Post
        message={post.message}
        likesAmount={post.likesAmount}
        id={post.id}
      />
    );
  });
  let onPostChange=(e)=>{
    let text=e.target.value;
    props.onPostChange(text);
  }
  let addPost=()=> {
    props.addPost();
  }
  return (
    <div className={styles.posts}>
      <div className={styles.newPost}>
        <div className={styles.textarea}>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div className={styles.addPost}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {posts}
    </div>
  );
};
export default MyPosts;
