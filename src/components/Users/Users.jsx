import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";

let Users=(props)=> {

    let users=props.usersPage.usersData.map(user=>{
        return <User name={user.userName} subscribersAmount={user.subscribersAmount} id={user.id} />;
        })
    return(
        <div className={styles.usersContainer}>{users}</div>
    )
}
export default Users;