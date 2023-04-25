const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";
let initialState={
    postsData: [
        {message: "Wow", likesAmount: "20", id: "1"},
        {message: "How are you?!", likesAmount: "8", id: "2"},
        {message: "What's up?!", likesAmount: "15", id: "3"},
        {message: "I feel good", likesAmount: "31", id: "4"},
        {message: "Don't stop me now", likesAmount: "10", id: "5"},
        {message: "I am throwing the ball", likesAmount: "34", id: "6"},
    ],
    newPostText: "Text here smth",
    profile: null
}
const profileReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {message: state.newPostText, likesAmount: 0, id: "6"}
            return{
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };
        }

        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newPostText,
            };
        }
        case SET_USER_PROFILE:{
            return{...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostAC=()=>({type: ADD_POST
})
export const postChangeAC=(text)=>({type: UPDATE_NEW_POST_TEXT, newPostText: text
});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile})
export default profileReducer;