import React from "react";
import styles from "./ProfileInfo.module.css";

import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
    // debugger
    // if(!props.profile){
    //     return <Preloader />
    // }
  return (
    <div className={styles.infoBlock}>
      <div>
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt="randomPhoto"
        ></img>
      </div>
      <div>
          {/*<img src={props.profile.photos.large} alt="ava" />*/}
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};
export default ProfileInfo;
