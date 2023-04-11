
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const dialogsReducer=(state, action)=>{
    switch (action.type){
        case SEND_MESSAGE:
            let newMessage={message: state.newMessageText, id: "8"}
            state.messagesContentData.push(newMessage);
            state.newMessageText="";
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText=action.newMessageText;
            break;
        default:
            return state;

    }
    return state;
}
export const sendMessageAC=()=>({type: SEND_MESSAGE
})

export const messageChangeAC=(text)=>({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
});
export default dialogsReducer;