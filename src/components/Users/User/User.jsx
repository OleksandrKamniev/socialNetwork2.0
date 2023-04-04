import styles from "./User.module.css"
let User=(props)=>{
    return(
        <div className={styles.userContainer}>
            <div>{props.name}</div>
            <div>Subscribers {props.subscribersAmount}</div>
        </div>
    )
}
export default User;