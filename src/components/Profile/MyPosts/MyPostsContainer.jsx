import React from "react";
import {addPostAC, postChangeAC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        onPostChange: (text)=>{
            let action=postChangeAC(text);
            dispatch(action);
        },
        addPost: ()=>{
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
