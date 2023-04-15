import React from "react";
import {sendMessageAC, messageChangeAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }

}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMessage: ()=> {
            dispatch(sendMessageAC())
        },
        onMessageChange:  (text) => {
            dispatch(messageChangeAC(text))
        }
    }
}
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
