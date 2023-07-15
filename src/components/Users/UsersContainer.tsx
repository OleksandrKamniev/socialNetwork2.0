import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    follow,
    requestUsers,
    UserType,
} from '../redux/usersReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,

} from '../redux/usersSelectors';
import Preloader from '../common/Preloader/Preloader.js';
import Users from './Users';
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void;
    followTC: (userId: number) => void;
    unfollowTC: (userId: number) => void;
    setCurrentPage: (pageNumber: number) => void;
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
};

type Props = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends Component<Props> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followTC: follow,
        unfollowTC: unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
    })
)(UsersContainer);