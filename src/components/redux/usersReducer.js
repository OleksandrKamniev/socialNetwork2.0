const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState={
    usersData:[
        {userName: "Alex", followed:true, status:"I am the boos of the gym", city:"Odesa", id:"1", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
        {userName: "Josh", followed:true, status:"I am the boos of the lockerroom", city:"Tallin", id:"2", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
        {userName: "Boris",followed:false,status:"I am who I am", city:"Lviv", id:"3", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
        {userName: "Katya",followed:true, status:"I am fine", city:"Dortmund", id:"4", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
        {userName: "Jana",followed:false, status:"I am so sad", city:"London", id:"5", photoUrl:"https://i.imgflip.com/2/4yp4oh.jpg"},
    ],
}
const usersReducer=(state=initialState, action)=>{
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
            return {...state, users: {...state.users, ...action.users }}
        }
        default:
            return state;
    }
}

export const followAC=(userId)=>({type: FOLLOW, userId
})
export const unfollowAC=(userId)=>({type: UNFOLLOW, userId
});
export const setUsersAC=(users)=>({type: SET_USERS, users
});
export default usersReducer;