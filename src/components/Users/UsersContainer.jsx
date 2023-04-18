
import {connect} from "react-redux";

import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../redux/usersReducer";


let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.usersData
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

