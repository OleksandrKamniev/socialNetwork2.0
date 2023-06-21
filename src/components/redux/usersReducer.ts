import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING= "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";
type UserType={
    id:number
    followed:boolean
}
let initialState={
    users:[
    ]as Array<UserType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true,
    followingInProgress: [2, 3] as number[],

}
type InitialStateType=typeof initialState
const usersReducer=(state:InitialStateType=initialState, action:any)=>{
    switch (action.type) {
        case FOLLOW: {
           return {
               ...state,
               users: state.users.map(u=>{
                   if (u.id===action.userId){
                       return{...u, followed: true}
                   }
                   return u;
               })
           }
        }

        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id===action.userId){
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return {...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return{...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return{...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return{
                ...state,
                followingInProgress: action.isFetching? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id!==action.userId)}
        }

        default:
            return state;
    }
}
type FollowSuccessType={
    type: typeof FOLLOW,
    userId: number
}
type UnfollowSuccessType={
    type: typeof UNFOLLOW,
    userId: number
}
type SetUsersType={
    type: typeof SET_USERS,
    users: UserType[]
}
type SetCurrentPageType={
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type SetTotalUsersCountType={
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
type ToggleIsFetchingType={
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type ToggleFollowingProgressType={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId:number
}

export const followSuccess=(userId:number):FollowSuccessType=>({type: FOLLOW, userId
})
export const unfollowSuccess=(userId:number):UnfollowSuccessType=>({type: UNFOLLOW, userId
});
export const setUsers=(users:UserType[]):SetUsersType=>({type: SET_USERS, users
});
export const setCurrentPage=(currentPage:number):SetCurrentPageType=>({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount=(totalUsersCount:number):SetTotalUsersCountType=>({type:SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export const toggleIsFetching=(isFetching:boolean):ToggleIsFetchingType=>({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress=(isFetching:boolean, userId:number):ToggleFollowingProgressType=>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers =(page:number, pageSize:number)=>(dispatch:any)=>{
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(setCurrentPage(page));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}
export const unfollow=(userId:number)=>(dispatch:any)=>{
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.acceptUnfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}
export const follow=(userId:number)=>(dispatch:any)=>{
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.acceptFollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}


export default usersReducer;