import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,  follow, requestUsers
} from "../redux/usersReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../redux/usersSelectors";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged=(pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize);

    }
    render() {
        return <>
            {this.props.isFetching? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
            />
            </>

            }
}
// let mapStateToProps=(state)=>{
//     return{
//         users:state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, {
        followTC: follow, unfollowTC: unfollow,
        setCurrentPage, toggleFollowingProgress,
        getUsers:  requestUsers
    }),
    withAuthRedirect)
(UsersContainer);