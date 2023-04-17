const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
// let initialState={
//     usersData:[
//         {userName: "Alex", followed:true, status:"I am the boos of the gym", city:"Odesa", id:"1"},
//         {userName: "Josh", followed:true, status:"I am the boos of the lockerroom", city:"Tallin", id:"2"},
//         {userName: "Boris",followed:false,status:"I am who I am", city:"Lviv", id:"3"},
//         {userName: "Katya",followed:true, status:"I am fine", city:"Dortmund", id:"4"},
//         {userName: "Jana",followed:false, status:"I am so sad", city:"London", id:"5"},
//     ],
// }
const usersReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW: {
           let stateCopy={
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
            let stateCopy={
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
            return {...state, users: {...state.users, ...action.users }}
        }
        default:
            return state;
    }
}

export const followAC=(userId)=>({type: FOLLOW
})
export const unfollowAC=(userId)=>({type: UNFOLLOW
});
export const setUsersAC=(users)=>({type: SET_USERS, users
});
export default usersReducer;