const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
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
}
const profileReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {message: state.newPostText, likesAmount: 0, id: "6"}
            state.postsData.push(newPost)
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;

    }
}
export const addPostAC=()=>({type: ADD_POST
})
export const postChangeAC=(text)=>({type: UPDATE_NEW_POST_TEXT, newPostText: text
});
export default profileReducer;