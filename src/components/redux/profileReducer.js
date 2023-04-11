const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer=(state, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {message: state.newPostText, likesAmount: "0", id: "6"}
            state.postsData.push(newPost)
            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
        default:
            return state;

    }
    return state;
}
export const addPostAC=()=>({type: ADD_POST
})
export const postChangeAC=(text)=>({type: UPDATE_NEW_POST_TEXT, newPostText: text
});
export default profileReducer;