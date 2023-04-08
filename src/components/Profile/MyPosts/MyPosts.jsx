import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let posts = props.postsData.map((post) => {
    return (
      <Post
        message={post.message}
        likesAmount={post.likesAmount}
        id={post.id}
      />
    );
  });
  let newPostElement=React.createRef()
  let addPost=()=>{
    props.dispatch({type: "ADD-POST"})
  }
  let onPostChange=()=>{
    let text=newPostElement.current.value;
    let action = {type: "UPDATE-NEW-POST-TEXT", newText:text};
    props.dispatch(action)

  }
  return (
    <div className={styles.posts}>
      <div className={styles.newPost}>
        <div className={styles.textarea}>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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
