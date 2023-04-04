import React from "react";
import styles from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={styles.infoBlock}>
      Main content
      <div>
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt="randomPhoto"
        ></img>
      </div>
      <div>ava+description</div>
    </div>
  );
};
export default ProfileInfo;
