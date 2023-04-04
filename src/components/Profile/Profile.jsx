import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
