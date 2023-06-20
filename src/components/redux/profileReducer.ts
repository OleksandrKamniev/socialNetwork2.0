import { profileAPI, usersAPI }  from "../api/api"

interface Post{
    message:string
    likesAmount: string
    id: string
}
interface ProfileState{
    postsData: Post[]
    newPostText: string
    profile: any
    isAuth: boolean
    status: string
}
interface AddPostAction{
    type: typeof ADD_POST
    newPostText: string
}
interface DeletePostAction {
    type: typeof DELETE_POST;
    postId: string;
}
interface UpdateNewPostTextAction {
    type: typeof UPDATE_NEW_POST_TEXT;
    newPostText: string;
}
interface SetUserProfileAction {
    type: typeof SET_USER_PROFILE;
    profile: any; // Здесь необходимо добавить тип профиля из вашего API
}

interface SetStatusAction {
    type: typeof SET_STATUS;
    status: string;
}
type ProfileActionTypes =
    | AddPostAction
    | DeletePostAction
    | UpdateNewPostTextAction
    | SetUserProfileAction
    | SetStatusAction;
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS="SET_STATUS";
const DELETE_POST="DELETE_POST";
let initialState:ProfileState={
    postsData: [
        {message: "Wow", likesAmount: "20", id: "1"},
        {message: "How are you?!", likesAmount: "8", id: "2"},
        {message: "What's up?!", likesAmount: "15", id: "3"},
        {message: "I feel good", likesAmount: "31", id: "4"},
        {message: "Don't stop me now", likesAmount: "10", id: "5"},
        {message: "I am throwing the ball", likesAmount: "34", id: "6"},
    ],
    newPostText: "Text here smth",
    profile: null,
    isAuth: false,
    status: ""
}
const profileReducer=(state=initialState, action:ProfileActionTypes):ProfileState=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {message: state.newPostText, likesAmount: "0", id: "6"}
            return{
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
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
        case SET_STATUS:{
            return{...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText:string) => ({
    type: ADD_POST,
    newPostText: newPostText,
});
export const deletePostAC = (postId:string) => ({
    type: DELETE_POST,
    postId
});
export const postChangeAC = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const setUserProfile=(profile:any)=>({type:SET_USER_PROFILE, profile})
export const setStatus=(status:string)=>({type: SET_STATUS, status})
export const getUserProfile=(userId:number)=>(dispatch:any)=>{
    usersAPI.getProfile(userId).then((response:any)=>{
        dispatch(setUserProfile(response.data))
    })

}
export const getStatus=(userId:number)=>(dispatch:any)=>{
    profileAPI.getStatus(userId).then((response:any)=>{
        dispatch(setStatus(response.data))
    })

}
export const updateStatus=(status:string)=>(dispatch:any)=>{
    profileAPI.updateStatus(status).then((response:any)=>{
        if(response.data.resultCode===0){
        dispatch(setStatus(status))
        }
    })

}
export default profileReducer;