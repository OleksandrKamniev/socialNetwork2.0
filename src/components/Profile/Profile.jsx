import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.props}/>
      <MyPostsContainer/>
    </div>
  );
};
export default Profile;
