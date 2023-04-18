import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {userName: "Alex", followed:true, status:"I am the boos of the gym", city:"Odesa", id:"1", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
                {userName: "Josh", followed:true, status:"I am the boos of the lockerroom", city:"Tallin", id:"2", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
                {userName: "Boris",followed:false,status:"I am who I am", city:"Lviv", id:"3", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
                {userName: "Katya",followed:true, status:"I am fine", city:"Dortmund", id:"4", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
                {userName: "Jana",followed:false, status:"I am so sad", city:"London", id:"5", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt="photoUrl"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;