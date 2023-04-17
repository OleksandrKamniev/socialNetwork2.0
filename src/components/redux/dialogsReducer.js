
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let intialState={
    authorsMessagesData: [
        {name: "Sveta", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "1"},
        {name: "Vera", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "2"},
        {name: "Nika", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "3"},
        {name: "Veronika", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "4"},
        {name: "Alex", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "5"},
        {name: "King", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "6"},
    ],
    messagesContentData: [
        {message: "Wow", id: "1"},
        {message: "Bello", id: "2"},
        {message: "Hola", id: "3"},
        {message: "Hold on", id: "4"},
        {message: "Hi", id: "5"},
        {message: "Hello", id: "6"},
    ],
    newMessageText: "",
}

const dialogsReducer=(state=intialState, action)=>{
    let stateCopy;
    switch (action.type){
        case SEND_MESSAGE: {
            let newMessage=state.newMessageText;
            stateCopy={
                ...state,
                messagesContentData: [...state.messagesContentData, {id: 6, message: newMessage}],
                newMessageText: ""
            };
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            stateCopy={
                ...state,
                newMessageText: action.newMessageText};
            return stateCopy;
        }
        default:
            return state;

    }
}
export const sendMessageAC=()=>({type: SEND_MESSAGE
})

export const messageChangeAC=(text)=>({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
});
export default dialogsReducer;