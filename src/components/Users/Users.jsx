import React from 'react';
import styles from "./Users.module.css"
import userPhoto from "../../asserts/userImage.jpg"
import {NavLink} from "react-router-dom";
import {userAPI} from "../api/api";
let Users =(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return <div>
            <div>
                {pages.map(p=>{
                    return <span className={props.currentPage===p && styles.selectedPage}
                    onClick={()=>{props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={ `/profile/${ u.id }` }>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="ava"/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                userAPI.unfollow(u.id)
                                    .then(data => {
                                        if(data.resultCode===0){
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                userAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </span>
                </div>)
            }
        </div>
}


export default Users;