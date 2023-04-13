import React from "react";
import {addPostAC, postChangeAC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContent from "../../../StoreContent";

const MyPostsContainer = (props) => {

  return (
      <StoreContent.Consumer>
          {
          (store)=>{
            let addPost=()=>{
              store.dispatch(addPostAC())
            }
            let onPostChange=(text)=>{
              let action=postChangeAC(text);
              store.dispatch(action)
            }
            let state=store.getState();
        return <MyPosts onPostChange={onPostChange} addPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
          }
      }
      </StoreContent.Consumer>
        );
};
export default MyPostsContainer;
